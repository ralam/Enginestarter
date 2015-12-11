require 'faker'

FactoryGirl.define do
  factory :project do |f|
    f.title {Faker::Lorem.word}
    f.body {Faker::Lorem.paragraph}
    f.goal {Faker::Number.positive}
    f.end_date {Faker::Date.forward}
    f.owner_id 1
    f.category_id {Faker::Number.between(from = 1, to = 5)}
    f.image_url {Faker::Internet.url}
  end
end
