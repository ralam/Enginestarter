require 'rails_helper'

RSpec.describe Project, type: :model do
  let(:project) do
    create(:project)
  end

  it "has a valid factory" do
    expect(project).to be_valid
  end
end
