json.cart do
  @items.each do |item|
    json.set! item.id do
      json.extract! item, :product_id, :quantity, :id
      json.price item.price
      json.total_price (item.price * item.quantity).round(2)
    end
  end
end

json.products do
  @items.each do |item|
    json.set! item.product_id do
      json.extract! item.product,
      :id, :user_id, :title, :description, :price, :img_url
    end
  end
end
