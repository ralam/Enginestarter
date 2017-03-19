require 'rails_helper'

RSpec.describe Reward, type: :model do
  let(:reward) {build(:reward)}

  it "has a valid factory" do
    expect(reward).to be_valid
    expect(reward.level).to be_an(Integer)
    expect(reward.title).to be_a(String)
    expect(reward.info).to be_a(String)
    expect(reward.project_id).to be_an(Integer)
  end

  it "must have a reward level" do
    expect(build(:reward, level: nil)).to_not be_valid
  end

  it "must have a title" do
    expect(build(:reward, title: nil)).to_not be_valid
  end

  it "must have info about itself" do
    expect(build(:reward, info: nil)).to_not be_valid
  end

  it "must belong to a project" do
    expect(build(:reward, project_id: nil)).to_not be_valid
  end
end
