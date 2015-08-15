class Api::ProjectsController < ApplicationController
  before_action :require_login, only: [:create]
  before_action :require_login_as_project_owner, only: [:update]

  def create
    duration = params[:duration].to_i
    @project = Project.new(project_params)
    @project.owner_id = current_user.id
    @project.end_date = Time.now + duration.days
    rewards = []
    params[:rewards].each do |reward|
      rewards.push(Reward.new(reward.permit(:level, :title, :info)))
    end

    begin
    errors = []
      Project.transaction do
        @project.save!
        rewards.each do |reward|
          reward.project_id = @project.id
          @reward = reward
          @reward.save!
        end
      end
      render :show
    rescue
      if @reward
        errors.push(@reward.errors.full_messages)
      end
      errors.push(@project.errors.full_messages)
      render json: errors.flatten, status: 422
      return
    end
  end

  def update
    @project = Project.find(params[:id])
    rewards = []
    params[:rewards].each do |reward|
      rewards.push(Reward.new(reward.permit(:level, :title, :info)))
    end

    begin
    errors = []
      Project.transaction do
        @project.save!
        rewards.each do |reward|
          reward.project_id = @project.id
          @reward = reward
          @reward.save!
        end
      end
      render :show
    rescue
      if @reward
        errors.push(@reward.errors.full_messages)
      end
      errors.push(@project.errors.full_messages)
      render json: errors.flatten, status: 422
      return
    end
  end

  def show
    @project = Project.find(params[:id])
    if @project
      render :show
    else
      flash[errors] = ["That project doesn't exist."]
      redirect_to '/'
    end
  end

  def destroy
  end

  def index
    @projects = Project.all
  end


  def require_login
    if !current_user
      render json: ["You must be logged in to create a project."], status: 401
      return
    end
  end


  private


  def require_login_as_project_owner
    @project = Project.find(params[:id])
    if current_user.id != @project.owner_id
      render json: ["Only the owner of a project can edit it."], status: 403
    end
  end

  def project_params
    params
      .require(:project)
      .permit(:title, :body, :goal, :end_date, :owner_id, :category_id, :image_url)
  end
end
