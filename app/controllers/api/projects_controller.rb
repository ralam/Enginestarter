class Api::ProjectsController < ApplicationController

  def create
    @project = Project.new(project_params)
    @project.owner_id = current_user.id
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
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
