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
      @product = Product.new(product_params)
      if @product.save
        render "api/products/show"
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def destroy
      @product = Product.find(params[:id])
      @product.destroy
      render "api/products/show"
    end

    private

    def product_params
      params.require(:product).permit(
        :user_id,:img_url,:title,:description,:quantity,:price
      )
    end
end
