require 'rails_helper'

RSpec.describe Project, type: :model do
  let(:project) {build(:project)}

  it "has a valid factory" do
    expect(project).to be_valid
    expect(project.title).to be_a(String)
    expect(project.body).to be_a(String)
    expect(project.owner_id).to be_an(Integer)
    expect(project.goal).to be_an(Integer)
    expect(project.end_date).to be_a(Date)
    expect(project.category_id).to be_an(Integer)
    expect(project.image_url).to be_a(String)
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

  it 'has rewards' do
    should have_many(:rewards)
  end

  it 'has rewardings trough rewards' do
    should have_many(:rewardings).through(:rewards)
  end

  it 'belongs to a category' do
    should belong_to(:category)
  end

  it 'belongs to a user' do
    should belong_to(:user)
  end
end
