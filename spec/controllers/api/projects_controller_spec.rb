require 'rails_helper'

RSpec.describe Api::ProjectsController, type: :controller do
  render_views

  let(:json) { JSON.parse(response.body) }


  describe "GET index" do
    let(:first_project) {create(:project)}
    let(:second_project) {create(:project)}
    before {get :index, format: :json}

    it "has a 200 status code" do
      expect(response.status).to eq(200)
    end

    it "returns JSON data" do
      expect(response.content_type).to eq "application/json"
    end
  end
end
