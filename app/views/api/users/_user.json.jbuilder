json.user do
  json.extract! user, :id, :email, :name
  json.shopping_cart_id user.shopping_cart.id
  json.product_ids user.products.pluck(:id)
  json.shopping_cart_items user.shopping_cart_items.pluck(:product_id).uniq
end


json.products do

  user.products.each do |item|
    json.set! item.id do
      json.extract! item, :id, :title, :description, :price, :img_url
    end
  end

  user.shopping_cart_items.each do |item|
    json.set! item.product_id do
      json.extract! Product.find(item.product_id), :id, :title, :description, :price, :img_url
    end
  end
end

total_price = 0
cart_items = Hash.new(0)
user.shopping_cart_items.each do |item|
  total_price += item.price * item.quantity
  cart_items[item.product_id] += (item.price * item.quantity).round(2)
end

json.total_price do
  json.total_price total_price.round(2)
  json.price_per_item cart_items
end
