class ShoppingCartItem < ApplicationRecord

  belongs_to :shopping_cart,
  foreign_key: :cart_id,
  class_name: :ShoppingCart

  belongs_to :product

  delegate :price, to: :product
end
