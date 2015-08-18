json.array!(@categories) do |category|
  json.partial!('api/categories/categories', category: category)
end
