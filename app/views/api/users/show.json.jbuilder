json.extract!(@user, :email)

project_ids = []
@user.rewards.each do |reward|
  project_id = reward.project_id
  project_ids.include?(project_id) ? next : project_ids.push(project_id)
end

json.project_ids = project_ids.sort
