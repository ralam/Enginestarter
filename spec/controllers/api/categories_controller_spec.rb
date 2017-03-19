require 'rails_helper'

RSpec.describe Api::CategoriesController, type: :controller do
  render_views

  let(:json) { JSON.parse(response.body) }


  describe "GET index" do
    let(:first_category) {create(:category)}
    let(:cow_category) {create(:category)}
    before {get :index, format: :json}

    it "has a 200 status code" do
      expect(response.status).to eq(200)
    end

    it "returns JSON data" do
      expect(response.content_type).to eq "application/json"
    end
  end
end
