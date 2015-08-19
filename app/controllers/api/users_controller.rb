class Api::UsersController < ApplicationController
  def show
    @user = Project.find(params[:id])
    if @user
      render :showView
    else
      render json: ["That user doesn't exist"]
    end
  end
end
