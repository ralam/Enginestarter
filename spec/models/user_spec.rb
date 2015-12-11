require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) do
    create(:user)
  end

  it "has a valid factory" do
    expect(user).to be_valid
    expect(user.email).to be_a(String)
    expect(user.password).to be_a(String)
  end
end
