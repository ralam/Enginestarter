class Reward < ActiveRecord::Base
  validates :level, :title, :info, :project_id, presence: true

  belongs_to :project
  has_many :rewardings
  belongs_to :user through: :rewardings
end
