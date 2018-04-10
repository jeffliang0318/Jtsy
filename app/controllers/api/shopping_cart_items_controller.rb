class Api::ShoppingCartItemsController < ApplicationController
  def index
    @items = ShoppingCartItem.all
    render :index
  end

  def show
    @item = ShoppingCartItem.find_by(user_id: params[:id])
  end

  def create
    @item = ShoppingCartItem.new(cart_item_params)
    if @item.save
      render "api/shopping_cart_items"
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def destroy
    @item = ShoppingCartItem.find_by(user_id: params[:id])
    @item.destroy
    render "api/shopping_cart_items/show"
  end
  def cart_item_params
    params.require(:shoppingCartItem).permit(
      :user_id, :product_id, :items
    )
  end
end
