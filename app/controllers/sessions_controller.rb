class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user.nil?
      flash.now[:errors] = ["Invalid email/password combination"]
      redirect_to new_session_url
    else
      log_in!(user)
      redirect_to "/"
    end
  end

  def destroy
    log_out!
    redirect_to new_session_url
  end
end
