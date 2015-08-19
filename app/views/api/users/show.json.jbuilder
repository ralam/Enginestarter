json.extract!(@user, :email)

project_ids = []

@user.rewards.each {|reward| project_ids.push(reward.project_id)}

json.project_ids project_ids.uniq.sort

json.supported_projects @user.supported_projects.uniq
