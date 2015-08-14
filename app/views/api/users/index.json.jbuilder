if current_user
  json.extract!(@user, :id)
else
  json.id "null"
end
