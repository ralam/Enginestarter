class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end

  def show
    begin
      @category = Category.find(params[:id])
      if @category
        render 'api/categories/show.json'
      end
    rescue
      render json: ["That category doesn't exist."], status: 404
    end

  end
end
