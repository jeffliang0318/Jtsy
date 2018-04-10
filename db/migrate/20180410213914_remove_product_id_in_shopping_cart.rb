class RemoveProductIdInShoppingCart < ActiveRecord::Migration[5.1]
  def change
    remove_column(:shopping_carts, :product_id)
    rename_column(:shopping_cart_items, :user_id, :cart_id)
  end
end
