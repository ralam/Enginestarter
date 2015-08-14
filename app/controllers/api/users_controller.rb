class Api::UsersController < ApplicationController

  def index
    @user = current_user;
  end

end
