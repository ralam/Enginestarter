class Api::ProjectsController < ApplicationController

  def create
    duration = params[:duration].to_i
    @project = Project.new(project_params)
    @project.owner_id = current_user.id
    @project.end_date = Time.now + duration.days
    @reward = Reward.new(params.require(:reward).permit(:level, :title, :info))
    begin
      Project.transaction do
        @project.save!
        @reward.project_id = @project.id
        @reward.save!
      end
      render :show
    rescue
      render json: @project.errors.full_messages + @reward.errors.full_messages, status: 422
      return
    end
  end

  def update
  end

  def show
    @project = Project.find(params[:id])
    if @project
      render :show
    else
      flash[errors] = ["That board doesn't exist"]
      redirect_to '/'
    end
  end

  def destroy
  end

  private

  def project_params
    params
      .require(:project)
      .permit(:title, :body, :goal, :end_date, :owner_id, :category_id)
  end
end
