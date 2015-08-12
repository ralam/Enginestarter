class Reward < ActiveRecord::Base
  validates :reward_level, :reward_title, :reward_info, :project_id, presence: true

  belongs_to :project
  has_many :rewardings
  belongs_to :user through: :rewardings
end
