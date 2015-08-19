json.extract!(@user, :email)

project_ids = []
@user.rewards.each do |reward|
  project_ids.push(reward.project_id)
end

json.project_ids = project_ids
