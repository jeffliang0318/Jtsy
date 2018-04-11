class ShoppingCartItemAddPriceColumn < ActiveRecord::Migration[5.1]
  def change
    add_column(:shopping_cart_items, :price, :float)
  end
end
