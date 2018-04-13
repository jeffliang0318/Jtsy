class Api::ShoppingCartItemsController < ApplicationController
  def index
    @items = current_user.shopping_cart_items
    render "api/shopping_cart_items/index"
  end

  def create
    @item = ShoppingCartItem.new(cart_item_params)
    if @item.save
      render "api/shopping_cart_items/show"
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def show
    @item = current_user.shopping_cart_items.find(params[:id])
  end

  def update
    @item = current_user.shopping_cart_items.find_by(product_id: params[:id])
    if @item
      @item = ShoppingCartItem.new(cart_item_params)
      if @item.save
        render "api/shopping_cart_items/show"
      else
        render json: @item.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @items = ShoppingCartItem.where(product_id: params[:id])
      @items.each do |item|
        item.destroy
      end
    render "api/shopping_cart_items/index"
  end

  def cart_item_params
    params.require(:item).permit(
      :cart_id, :product_id, :quantity
    )
  end
end
