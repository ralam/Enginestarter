class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: ["That user doesn't exist"]
    end
  end
end
