json.extract!(@user, :email)

json.supported_projects @user.supported_projects.uniq
