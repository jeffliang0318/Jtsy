class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.integer :user_id, null: false
      t.string :img_url, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.integer :quantity, null: false, default: 1
      t.float :price, null: false, default: 0.0

      t.timestamps
    end
    add_index :products, :user_id
    add_index :products, :title
  end
end
