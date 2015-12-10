require 'faker'

FactoryGirl.define do
  factory :user do |f|
    f.email {Faker::Internet.email}
    f.password_digest {Faker::Internet.password(8)}
  end

end
