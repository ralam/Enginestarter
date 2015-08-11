class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  def log_in!(user)
    user.reset_token!
    @current_user = user
    session[:session_token] = user.session_token
  end

  def current_user
    return nil if self.session[:session_token].nil?
    @current_user ||= User.find_by(session_token: self.session[:session_token])
  end

  def log_out!
    current_user.try(:reset_token!)
    self.session[:session_token] = nil
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
