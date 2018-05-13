class AddCategoryToProducts < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :category, :string
  end
end
