# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)w



Category.create(title: 'Adventure')
Category.create(title: 'Art')
Category.create(title: 'Food')
Category.create(title: 'Music')
Category.create(title: 'Technology')

#persist users



#Project 1

Project.create(
  title: 'Finding the perfect pineapple',
  body: "I'm going to look for the perfect pineapple in Hawaii.",
  goal: 600,
  end_date: "2015-12-24",
  owner_id: "1",
  category_id: "3",
  image_url: "http://res.cloudinary.com/dp32c2sq2/image/upload/v1439598282/wdqkaxyn7p3imklsdyb0.jpg"
)

Reward.create(
  level: '5',
  title: "Signed postcard",
  info: "You'll get a signed postcard from me while I'm in Hawaii.",
  project_id: 1
)
Reward.create(
  level: '10',
  title: "Piece of pineapple",
  info: "I'll send you a piece of pineapple from Hawaii, shipped fresh!",
  project_id: 1
)
Reward.create(
  level: '25',
  title: "Premium piece of pineapple",
  info: "I'll send you a piece of pineapple from the best pineapple I find in Hawaii.",
  project_id: 1
)
Reward.create(
  level: '35',
  title: "Pineapple leaf",
  info: "You'll get a leaf from the top of the best pineapple I find in Hawaii.",
  project_id: 1
)

#Project 2

Project.create(
  title: 'Better sliced bread',
  body: "Sliced bread was a pretty good invention, but I'm going to figure out how to do it better.",
  goal: 300,
  end_date: "2015-11-24",
  owner_id: "1",
  category_id: "3",
  image_url: "http://res.cloudinary.com/dp32c2sq2/image/upload/v1440440987/kgu97ettmqtuimq0d1kx.jpg"
)
Reward.create(
  level: '3',
  title: "Signed postcard",
  info: "I'll send you a test of one of my slices of bread. Let me know if it's better than regular sliced bread!",
  project_id: 2
)
Reward.create(
  level: '10',
  title: "A loaf of sliced bread",
  info: "Once I've come up with the best way to slice bread, I'll send you a loaf of bread sliced with my new technique.",
  project_id: 2
)
Reward.create(
  level: '17',
  title: "Two loaves of bread",
  info: "Same as above, but you'll get two loaves instead of one! What a deal!",
  project_id: 2
)
Reward.create(
  level: '100',
  title: "Bread knife",
  info: "I'll send you one of the knives that I used while coming up with a new way of slicing bread.",
  project_id: 2
)
Reward.create(
  level: '200',
  title: "Commemorative cutting board",
  info: "Get the board I used to cut the bread on.",
  project_id: 2
)

#Project 3

Project.create(
  title: 'Journey through the swamp',
  body: "I'm going to try and cross a dangerous swamp -- fund me so I can survive.",
  goal: 1500,
  end_date: "2015-12-30",
  owner_id: "1",
  category_id: "1",
  image_url: "http://res.cloudinary.com/dp32c2sq2/image/upload/v1440377375/es3ylidgo022ytyt7cen.jpg"
)
Reward.create(
  level: '25',
  title: "Pre-journey photo",
  info: "I'll take a picture before I enter the swamp. Get what may be the last picture of me!",
  project_id: 3
)
Reward.create(
  level: '50',
  title: "Post-journey photo",
  info: "If I make it through, I'll send you a picture of me right after I exit the swamp.",
  project_id: 3
)
Reward.create(
  level: '250',
  title: "Map of the swamp",
  info: "You'll get the map I used to navigate the swamp. No guarentees if I don't make it through.",
  project_id: 3
)
Reward.create(
  level: '500',
  title: "My tent",
  info: "You'll get the tent (or what remains of it) that I slept in while in the swamp.",
  project_id: 3
)

#Project 4

Project.create(
  title: 'Adventure across the desert',
  body: "I'm going on an adventure in the desert. Please support me so I can buy water.",
  goal: 200,
  end_date: "2016-02-04",
  owner_id: "1",
  category_id: "1",
  image_url: "http://res.cloudinary.com/dp32c2sq2/image/upload/v1439594992/h1p1xaukufypl3bovv4m.jpg"
)
Reward.create(
  level: '5',
  title: "Desert sand",
  info: "You'll get some sand from the desert. Very dry.",
  project_id: 4
)
Reward.create(
  level: '10',
  title: "Desert rocks",
  info: "You'll get a small rock from the desert. Red or brown, depending on what I find.",
  project_id: 4
)
Reward.create(
  level: '25',
  title: "Signed picture  ",
  info: "I'll take a picture in the desert, sign it, and send it to you",
  project_id: 4
)
Reward.create(
  level: '50',
  title: "Tree twigs",
  info: "If I find any trees on my trip, I'll send you a twig from one of them.",
  project_id: 4
)

#Project 5

Project.create(
  title: 'Building a hovercraft',
  body: "I want to build an awesome hovercraft, but I need your help.",
  goal: 30000,
  end_date: "2016-11-15",
  owner_id: "2",
  category_id: "5",
  image_url: "http://res.cloudinary.com/dp32c2sq2/image/upload/v1440446854/hclolgilojtbyyd8nal5.jpg"
)
Reward.create(
  level: '10',
  title: "Ticket to launching ceremony",
  info: "You'll get to attend the launching ceremony when I finish builidng the hovercraft.",
  project_id: 5
)
Reward.create(
  level: '100',
  title: "Ride on the test model",
  info: "You'll get to take a ride on the prototype hovercraft.",
  project_id: 5
)
Reward.create(
  level: '500',
  title: "Ride on the real thing!",
  info: "You'll get to ride on the finished hovercraft on launch day!",
  project_id: 5
)
Reward.create(
  level: '1500',
  title: "Pilot the hovercraft",
  info: "When I finish the hovercraft, I'll give you lessons on how to pilot it, and you'll get a chance to pilot it yourself.",
  project_id: 5
)

#Project 6

Project.create(
  title: 'Start a string quartet',
  body: "We're starting a string quartet and need your help (fourth member not pictured).",
  goal: 400,
  end_date: "2016-11-07",
  owner_id: "1",
  category_id: "4",
  image_url: "http://res.cloudinary.com/dp32c2sq2/image/upload/v1440447324/ttqbpyxpyuhkebwkyu1l.jpg"
)
Reward.create(
  level: '15',
  title: "Debut recording",
  info: "We'll send you an MP3 of our first recording.",
  project_id: 6
)
Reward.create(
  level: '25',
  title: "Attend our practice",
  info: "You'll be invited to attend one of our practice sessions.",
  project_id: 6
)
Reward.create(
  level: '50',
  title: "Tickets to a performance.",
  info: "We'll send you tickets to our first performance.",
  project_id: 6
)

#Project 7

Project.create(
  title: 'Bridges of the world',
  body: "I'm putting together a book of pictures of bridges around the world. Great for your coffee table!",
  goal: 550,
  end_date: "2015-12-02",
  owner_id: "1",
  category_id: "2",
  image_url: "http://res.cloudinary.com/dp32c2sq2/image/upload/v1440450453/lvfrmhv6lyhtiy5zllws.jpg"
)
Reward.create(
  level: '10',
  title: "Postcard",
  info: "I'll send you a postcard from one of the cities where I take pictures.",
  project_id: 7
)
Reward.create(
  level: '20',
  title: "Bridge picture",
  info: "You'll get a full-sized photograph of a bridge that I'll put in the book.",
  project_id: 7
)
Reward.create(
  level: '40',
  title: "Bridge poster",
  info: "You'll get a high-quality poster of a photo of bridge that I'll put in the book.",
  project_id: 7
)
Reward.create(
  level: '60',
  title: "The book",
  info: "I'll send you a copy of the first printing of my completed book once it's published.",
  project_id: 7
)

Rewarding.create(
  user_id: 2,
  reward_id: 3
)

Rewarding.create(
  user_id: 2,
  reward_id: 2
)

Rewarding.create(
  user_id: 2,
  reward_id: 15
)

Rewarding.create(
  user_id: 2,
  reward_id: 24
)

Rewarding.create(
  user_id: 1,
  reward_id: 20
)
