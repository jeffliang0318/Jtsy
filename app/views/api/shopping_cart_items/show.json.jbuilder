json.set!@item.user_id do
  json.extract! @item, :product_id
end
