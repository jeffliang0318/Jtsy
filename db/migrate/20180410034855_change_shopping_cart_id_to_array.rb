class ChangeShoppingCartIdToArray < ActiveRecord::Migration[5.1]
  def change
    add_column :shopping_cart_items, :items, :integer, array: true, default: []
  end
end
