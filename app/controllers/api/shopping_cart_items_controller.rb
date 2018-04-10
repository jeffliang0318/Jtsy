class Api::ShoppingCartItemsController < ApplicationController
  def create
    @item = ShoppingCartItem.new(cart_item_params)
    if @item.save
      render "api/shopping_cart_items"
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def destroy

  end
  def cart_item_params
    params.require(:shoppingCartItem).permit(
      :user_id, :product_id
    )
  end
end
