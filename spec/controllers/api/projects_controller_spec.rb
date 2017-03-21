require 'rails_helper'

RSpec.describe Api::ProjectsController, type: :controller do
  let (:dummy_project) {build(:project)}
  let (:category) {build(:category)}

  describe "GET #index" do
    before {get :index, format: :json}

    it "has a 200 status code" do
      expect(response.status).to eq(200)
    end

    it "returns JSON data" do
      expect(response.content_type).to eq "application/json"
    end
  end

  describe 'GET #show' do
    it 'renders the project as JSON' do
      Project.create!({
        title: dummy_project.title,
        body: dummy_project.body,
        goal: dummy_project.goal,
        end_date: dummy_project.end_date,
        owner_id: dummy_project.owner_id,
        category_id: dummy_project.category_id,
        image_url: dummy_project.image_url
      })
      get :show, id: 1

      expect(response.status).to eq(200)
      expect(response.content_type).to eq "application/json"
    end

    context 'if the project does not exist' do
      it 'has a 404 status code' do
        get :show, id: -1
        expect(response.status).to eq(404)
      end
    end
  end
end
