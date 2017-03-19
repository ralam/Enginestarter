require 'rails_helper'

RSpec.describe Rewarding, type: :model do
  let(:rewarding) {build(:rewarding)}

  it "has a valid factory" do
    expect(rewarding).to be_valid
    expect(rewarding.user_id).to be_an(Integer)
    expect(rewarding.reward_id).to be_an(Integer)
  end

  it 'belongs to a user' do
    should belong_to(:user)
  end

  it 'belongs to a reward' do
    should belong_to(:reward)
  end

  it "must have a user id" do
    expect(build(:rewarding, user_id:nil)).to_not be_valid
  end

  it "must have a reward id" do
    expect(build(:rewarding, reward_id:nil)).to_not be_valid
  end
end
