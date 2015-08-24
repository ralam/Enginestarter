every 1.day, :at => '11:00 pm' do
  runner "rake db:reseed"
end
