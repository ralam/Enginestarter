require 'faker'

FactoryGirl.define do
  factory :category do |f|
    f.title {Faker::Lorem.word}
  end
end
