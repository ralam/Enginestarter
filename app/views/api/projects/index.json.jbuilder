json.projects @projects.each do |project|
  json.partial!('api/projects/projects', project: project)
end
