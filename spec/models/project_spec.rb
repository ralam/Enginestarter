require 'rails_helper'

RSpec.describe Project, type: :model do
  let(:project) {build(:project)}

  it "has a valid factory" do
    expect(project).to be_valid
  end

  it "must have a title" do
    expect(build(:project, title: nil)).to_not be_valid
  end

  it "must have a body" do
    expect(build(:project, body: nil)).to_not be_valid
  end

  it "must have an owner" do
    expect(build(:project, owner_id: nil)).to_not be_valid
  end

  it "must have a goal" do
    expect(build(:project, goal: nil)).to_not be_valid
  end
  it "must have an end date" do
    expect(build(:project, end_date: nil)).to_not be_valid
  end

  it "must belong to a valid category" do
    expect(build(:project, category_id: nil)).to_not be_valid
  end

  it "must have an image" do
    expect(build(:project, image_url: nil)).to_not be_valid
  end
end
