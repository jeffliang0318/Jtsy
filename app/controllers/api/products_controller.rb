class Api::ProductsController < ApplicationController
  before_action :require_logged_in, only: [:create, :edit, :destroy]

    def index
      @products = Product.all
      render :index
    end

    def show
      @product = Product.find(params[:id])
    end

    def create
      @product = Product.create!(product_params)
      render :show
    end

    private

    def product_params
      params.require(:product).permit(
        :user_id,
        :img_url,
        :title,
        :description,
        :quantity,
        :price
      )
    end
end
