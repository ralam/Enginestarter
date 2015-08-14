json.extract!(
  @project,
  :title,
  :body,
  :goal,
  :end_date,
  :owner_id,
  :category_id,
  :id,
  :image_url
)

json.formatted_date("#{@project.end_date.to_s} GMT #{Time.now.strftime("%z")}")

json.rewards @project.rewards do |reward|
  json.partial!('api/rewards/rewards', reward: reward)
end

json.supporter_count @project.rewardings.count

sum = 0

@project.rewards.each do |reward|
  sum += reward.level * @project.rewardings.where(reward_id: reward.id).count
end

json.amount_pledged sum

json.category @project.category.title
