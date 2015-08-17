class Api::RewardsController < ApplicationController

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
      render json: ["That reward doesn't exist"]
    end
  end

  def index
  end

  private

  def reward_params
    params.require(:reward).permit(:level, :title, :info, :project_id)
  end
end
