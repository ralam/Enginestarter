class Api::RewardingsController < ApplicationController
  def create
    @rewarding = current_user.rewardings.new(rewarding_params)
    if @rewarding.save
      render json: ["Thanks for backing this project with a pledge of $#{@rewarding.reward.level}"]
    else
      render json: @rewarding.errors.full_messages, status: 422
    end
  end

  private

  def rewarding_params
    params.require(:rewarding).permit(:reward_id)
  end
end
