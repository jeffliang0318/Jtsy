class ShoppingCartItemRemoveItemsArray < ActiveRecord::Migration[5.1]
  def change
    remove_column(:shopping_cart_items, :items)
  end
end
