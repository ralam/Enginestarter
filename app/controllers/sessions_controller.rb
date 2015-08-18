class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user
      log_in!(user)
      redirect_to "/#index"
    else
      flash.now[:errors] = ["Invalid username or password"]
      render :new
    end
  end

  def destroy
    log_out!
    redirect_to "/#index"
  end
end
