json.partial!('api/projects/projects', project: @project)

json.formatted_date("#{@project.end_date.to_s} GMT #{Time.now.strftime("%z")}")
