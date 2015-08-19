class Reward < ActiveRecord::Base
  validates :level, :title, :info, :project_id, presence: true
  validates :level, numericality: { greater_than_or_equal_to: 1 }

  belongs_to :project
  has_many :rewardings
  has_many :users, through: :rewardings

end
