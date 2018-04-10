@items.each do |item|
  json.set!item.user_id do
    json.extract! item, :id, :user_id, :items
  end
end
