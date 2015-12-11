require 'faker'

FactoryGirl.define do
  factory :reward do |f|
    f.level {Faker::Number.positive}
    f.title {Faker::Lorem.word}
    f.info {Faker::Lorem.paragraph}
    f.project_id 1

  end

end
