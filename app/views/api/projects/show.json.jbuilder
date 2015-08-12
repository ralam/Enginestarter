json.extract!(
  @project,
  :title,
  :body,
  :goal,
  :end_date,
  :owner_id,
  :category_id,
  :id
)

json.formatted_date("#{@project.end_date.to_s} GMT #{Time.now.strftime("%z")}")

json.rewards @project.rewards do |reward|
  json.partial!('api/rewards/rewards', reward: reward)
end