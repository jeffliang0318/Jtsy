json.cart do
  @items.each do |item|
    json.set! item.product_id do
      json.extract! item, :product_id, :quantity
    end
  end
end

json.products do
  @items.each do |item|
    json.set! item.product_id do
      json.extract! Product.find(item.product_id), :id, :user_id, :title, :description, :price
    end
  end
end
