json.set!@item.user_id do
  json.extract! @item, :items
end
