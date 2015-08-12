class Rewarding < ActiveRecord::Base
  validates :user_id, :reward_id, presence: true

  belongs_to :user
  belongs_to :reward
end
