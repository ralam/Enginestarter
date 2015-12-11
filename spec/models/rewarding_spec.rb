require 'rails_helper'

RSpec.describe Rewarding, type: :model do
  let(:rewarding) {create(:rewarding)}

  it "has a valid factory" do
    expect(rewarding).to be_valid
    expect(rewarding.user_id).to be_an(Integer)
    expect(rewarding.reward_id).to be_an(Integer)
  end
end
