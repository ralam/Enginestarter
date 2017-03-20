require 'rails_helper'

RSpec.describe Api::CategoriesController, type: :controller do
  render_views

  let(:json) { JSON.parse(response.body) }

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
    it 'renders category as JSON' do
      Category.create!({title: 'Art'})
      get :show, id: 1

      expect(response.status).to eq(200)
      expect(response.content_type).to eq "application/json"
    end

    context 'if the category does not exist' do
      it 'has a 404 status code' do
        get :show, id: -1
        expect(response.status).to eq(404)
      end
    end
  end
end
