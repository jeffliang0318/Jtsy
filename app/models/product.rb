class Product < ApplicationRecord
  validates :user_id, :img_url, :title, :description, presence: true

  validates :quantity, numericality: { greater_than: 0 }

  validates :price, numericality: { greater_than: 0 }

  belongs_to :user,
  foreign_key: "user_id",
  class_name: "User"

  after_initialize :default_quantity

 private
   def default_quantity
     if self.quantity.nil?
        self.quantity = 1;
     end
   end
end
