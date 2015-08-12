json.extract!(
  project,
  :title,
  :body,
  :goal,
  :end_date,
  :owner_id,
  :category_id,
  :id
)

if get_rewards
  json.rewards do
    json.array!(project.rewards) do |reward|
      json.partial!('api/rewards/rewards'), reward: reward
    end
  end
end
