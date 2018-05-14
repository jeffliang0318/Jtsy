@products.each do |product|
  json.set!product.id do
    json.extract! product, :id, :user_id, :title, :price, :img_url, :category
  end
end
