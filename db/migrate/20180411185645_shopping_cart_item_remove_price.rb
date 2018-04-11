class ShoppingCartItemRemovePrice < ActiveRecord::Migration[5.1]
  def change
    remove_column(:shopping_cart_items, :price)
  end
end
