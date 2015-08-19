json.partial!('api/projects/projects', project: @project)



if current_user
  json.current_user current_user.id
end
