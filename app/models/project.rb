class Project < ActiveRecord::Base

  validates :title, :body, :goal, :end_date, :owner_id, :image_url, presence: true
  validates :goal, numericality: { greater_than_or_equal_to: 1 }

  belongs_to(
    :user,
    class_name: :User,
    foreign_key: :owner_id
  )

  has_many :rewards
  has_many :rewardings, through: :rewards
  belongs_to :category

end
