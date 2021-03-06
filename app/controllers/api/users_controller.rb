class Api::UsersController < ApplicationController
  before_action :require_login_as_user

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: "That user doesn't exist.", status: 404
    end
  end

  private

  def require_login_as_user
    if params[:id].to_i != current_user.id
      render json: "You may not view other users' profiles.", status: 401
    end
  end
end
