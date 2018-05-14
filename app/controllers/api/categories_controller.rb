class Api::CategoriesController < ApplicationController
  def index
  end

  def show
    @products = Product.where(category: params[:id])
  end

end
