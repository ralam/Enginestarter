class Api::ProjectsController < ApplicationController
  before_action :require_login, only: [:create]
  before_action :require_login_as_project_owner, only: [:update]
  before_action :require_positive_goal, only: [:create]
  before_action :require_future_end_date, only: [:create]

  def create
    duration = params[:duration].to_i
    @project = Project.new(project_params)
    @project.owner_id = current_user.id
    @project.end_date = Time.now + duration.days
    rewards = []
    parse_rewards(params, rewards)

    begin
    errors = []
      Project.transaction do
        @project.save!
        save_rewards(rewards)
      end
      render :show
    rescue
      render_errors(errors)
    end
  end

  def update
    @project = Project.find(params[:id])
    rewards = []
    if params[:rewards]
      parse_rewards(params, rewards)
    end

    begin
    errors = []
      Project.transaction do
        @project.update!(params.permit(:title, :body, :goal, :end_date, :owner_id, :category_id, :image_url))
        if rewards
          save_rewards(rewards)
        end
      end
      render :show
    rescue
      render_errors(errors)
    end
  end

  def show
    @project = Project.find(params[:id])
    if @project
      render :show
    else
      render json: ["That project doesn't exist."]
    end
  end

  def destroy
  end

  def index
    @projects = Project.all
  end

  private

  def require_login
    if !current_user
      render json: ["You must be logged in to create a project."], status: 401
      return
    end
  end

  def require_login_as_project_owner
    @project = Project.find(params[:id])
    if current_user.id != @project.owner_id
      render json: ["Only the owner of a project can edit it."], status: 403
    end
  end

  def require_positive_goal
    if project_params[:goal] < 1
      render json: ["Please enter a goal of at least $1."]
    end
  end

  def require_future_end_date
    if params[:duration] < 1
      render json: ["Please enter a duration greater than zero days."]
    end
  end

  def parse_rewards(params, rewards)
    params[:rewards].each do |reward|
      rewards.push(Reward.new(reward.permit(:level, :title, :info)))
    end
  end

  def save_rewards(rewards)
    rewards.each do |reward|
      reward.project_id = @project.id
      @reward = reward
      @reward.save!
    end
  end

  def render_errors(errors)
    if @reward
      errors.push(@reward.errors.full_messages)
    end
    errors.push(@project.errors.full_messages)
    render json: errors.flatten, status: 422
    return
  end

  def project_params
    params
      .require(:project)
      .permit(:title, :body, :goal, :end_date, :owner_id, :category_id, :image_url)
  end
end
