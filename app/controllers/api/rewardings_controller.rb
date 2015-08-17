class Api::RewardingsController < ApplicationController
  before_action :require_login
  before_action :require_current_user_is_not_project_owner
  before_action :prevent_duplicate_rewarding

  def create
    @rewarding = current_user.rewardings.new(rewarding_params)
    if @rewarding.save
      render json: ["Thanks for supporting this project with a pledge of $#{@rewarding.reward.level}"]
    else
      render json: @rewarding.errors.full_messages, status: 422
    end
  end

  private

  def require_current_user_is_not_project_owner
    reward_id = rewarding_params[:reward_id]
    if current_user.id == Reward.find(reward_id).project.user.id
      render json: ["You cannot support your own project"]
    end
  end

  def require_login
    if !current_user
      render json: ["Please log in before supporting a project"]
    end
  end

  def prevent_duplicate_rewarding

    reward_id = rewarding_params[:reward_id]
    dup = Rewarding.where(user_id: current_user.id).where(reward_id: reward_id)
    if dup
      render json: ["You have already supported this project at this level. You may still pick another reward level."]
    end
  end

  def rewarding_params
    params.require(:rewarding).permit(:reward_id)
  end
end
