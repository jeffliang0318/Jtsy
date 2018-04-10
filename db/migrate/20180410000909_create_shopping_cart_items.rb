class CreateShoppingCartItems < ActiveRecord::Migration[5.1]
  def change
    create_table :shopping_cart_items do |t|
      t.integer :user_id
      t.integer :product_id
      t.integer :quantity, default: 1
      t.timestamps
    end
    add_index :shopping_cart_items, :user_id
    add_index :shopping_cart_items, :product_id
  end
end
