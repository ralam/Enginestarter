class Api::RewardsController < ApplicationController
  before_action :require_positive_level, only: [:create]

  def create
    @reward = Reward.new(reward_params)
    if @reward.save
      render :show
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def show
    @reward = Reward.find(params[:id])
    fail
    if @reward
      render :show
    else
      render json: "That reward doesn't exist", status: 404
    end
  end

  def index
  end

  private

  def require_positive_level
    if reward_params[:level].to_i < 1
      render json: "Please enter a reward level of at least $1.", status: 400
    end
  end

  def reward_params
    params.require(:reward).permit(:level, :title, :info, :project_id)
  end
end
