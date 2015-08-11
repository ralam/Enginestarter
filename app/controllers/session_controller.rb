class SessionController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user.nil?
      flash.now[:errors] = ["Invalid email/password combination"]
      render :new
    else
      redirect_to root_url
    end
  end

  def destroy
    log_out!
    redirect_to new_session_url
  end
end
