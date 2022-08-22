# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Genre.destroy_all
Video.destroy_all
User.destroy_all

# Shows
s1 = Video.create!(title: "Itaewon Class", description: "An ex-con and his friends fight to make their ambitious dreams for their street bar a reality.", rating: "TV-MA", runtime: "16 Episodes", year: 2020, video_type: "show")
s2 = Video.create!(title: "New Girl", description: "After going through a rough breakup, awkward and upbeat Jess (Zooey Deschanel) moves in with three single guys. Intelligent and witty Nick is an underachiever who took the bartender off-ramp on his road to success. Together with Jess' best friend, Cece, they bond to form an unlikely, and dysfunctional, family.", rating: "TV-14", runtime: "7 Seasons", year: 2011, video_type: "show")
s3 = Video.create!(title: "Hospital Playlist", description: "Friends since undergrad school, five doctors remain close and share a love for music while working at the same hospital.", rating: "TV-14", runtime: "2 Seasons", year: 2021, video_type: "show")
s4 = Video.create!(title: "Crash Landing on You", description: "A paragliding mishap drops a South Korean heiress in North Korea - and into the life of an army officer, who decides he will help her hide.", rating: "TV-14", runtime: "16 Episodes", year: 2019, video_type: "show")
s5 = Video.create!(title: "Squid Game", description: "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.", rating: "TV-MA", runtime: "16 Episodes", year: 2021, video_type: "show")
s6 = Video.create!(title: "My Name", description: "Following her father's murder, a revenge-driven woman puts her trust in a powerful crime boss -- and enters the force under his direction.", rating: "TV-MA", runtime: "8 Episodes", year: 2021, video_type: "show")
s7 = Video.create!(title: "The Last Dance", description: "In the fall of 1997, Michael Jordan and the Chicago Bulls allowed a film crew to follow them as they went for their sixth NBA title in eight seasons. That resulted in a stunning portrait of one of the sport's most iconic athletes and a celebrated team. 'The Last Dance' follows the Bulls' 1997-98 season from start to finish, while also covering the rest of the chapters in Jordan's remarkable career.", rating: "TV-MA", runtime: "10 Episodes", year: 2020, video_type: "show")
s8 = Video.create!(title: "Top Boy", description: "This drama takes viewers into the housing estates of east London. There is tension between the drug gangs that operate almost openly and those who strive to live honest lives against the odds in the crime-riddled area. That tension is explored through the interlocking stories of 20-something drug dealer Dushane, who is determined to become the area's Top Boy, and good-natured but vulnerable teenager Ra'Nell, who is forced to grow up quickly following his mother's breakdown and enforced absence.", rating: "TV-MA", runtime: "2 Seasons", year: 2022, video_type: "show")

#Movies
# m1 = Video.create!(title: "The Dark Knight", rating: "PG-13", runtime: "2h 32m", year: 2008, video_type: "movie", description: "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.")
# m2 = Video.create!(title: "The Dark Knight Rises", rating: "PG-13", runtime: "2h 45m", year: 2012, video_type: "movie", description: "It has been eight years since Batman, in collusion with Commissioner Gordon, vanished into the night. Assuming responsibility for the death of Harvey Dent, Batman sacrificed everything for what he and Gordon hoped would be the greater good. However, the arrival of a cunning cat burglar and a merciless terrorist named Bane force Batman out of exile and into a battle he may not be able to win.")
# m3 = Video.create!(title: "Batman Begins", rating: "PG-13", runtime: "2h 20m", year: 2005, video_type: "movie", description: "A young Bruce Wayne travels to the Far East, where he's trained in the martial arts by Henri Ducard, a member of the mysterious League of Shadows. When Ducard reveals the League's true purpose -- the complete destruction of Gotham City -- Wayne returns to Gotham intent on cleaning up the city without resorting to murder. With the help of Alfred, his loyal butler, and Lucius Fox, a tech expert at Wayne Enterprises, Batman is born.")
# m4 = Video.create!(title: "Spider-Man: Into the Spider-Verse", rating: "PG", runtime: "1h 40m", year: 2018, video_type: "movie", description: "Bitten by a radioactive spider in the subway, Brooklyn teenager Miles Morales suddenly develops mysterious powers that transform him into the one and only Spider-Man. When he meets Peter Parker, he soon realizes that there are many others who share his special, high-flying talents. Miles must now use his newfound skills to battle the evil Kingpin, a hulking madman who can open portals to other universes and pull different versions of Spider-Man into our world.")
# m5 = Video.create!(title: "The Intern", rating: "PG-13", runtime: "2h 1m", year: 2015, video_type: "movie", description: "Starting a new job can be a difficult challenge, especially if you're already retired. Looking to get back into the game, 70-year-old widower Ben Whittaker seizes the opportunity to become a senior intern at an online fashion site. Ben soon becomes popular with his younger co-workers, including Jules Ostin, the boss and founder of the company. Whittaker's charm, wisdom and sense of humor help him develop a special bond and growing friendship with Jules.")
# m6 = Video.create!(title: "Crazy, Stupid, Love", rating: "PG-13", runtime: "1h 58m", year: 2011, video_type: "movie", description: "Cal Weaver is living the American dream. He has a good job, a beautiful house, great children and a beautiful wife, named Emily. Cal's seemingly perfect life unravels, however, when he learns that Emily has been unfaithful and wants a divorce. Over 40 and suddenly single, Cal is adrift in the fickle world of dating. Enter, Jacob Palmer, a self-styled player who takes Cal under his wing and teaches him how to be a hit with the ladies.")
# m7 = Video.create!(title: "Dumb and Dumber", rating: "PG-13", runtime: "1h 47m", year: 1994, video_type: "movie", description: "Imbecilic best friends Lloyd Christmas and Harry Dunne stumble across a suitcase full of money left behind in Harry's car by Mary Swanson, who was on her way to the airport. The pair decide to go to Aspen, Colo., to return the money, unaware that it is connected to a kidnapping. As Harry and Lloyd -- who has fallen in love with Mary -- are pursued across the country by hired killers and police, they find both their friendship and their brains tested.")
# m8 = Video.create!(title: "Creed", rating: "PG-13", runtime: "2h 13m", year: 2015, video_type: "movie", description: "Adonis Johnson never knew his famous father, boxing champion Apollo Creed, who died before Adonis was born. However, boxing is in his blood, so he seeks out Rocky Balboa and asks the retired champ to be his trainer. Rocky sees much of Apollo in Adonis, and agrees to mentor him, even as he battles an opponent deadlier than any in the ring. With Rocky's help, Adonis soon gets a title shot, but whether he has the true heart of a fighter remains to be seen.")
# m9 = Video.create!(title: "Dragon Ball Super: Broly", rating: "PG", runtime: "1h 40m", year: 2018, video_type: "movie", description: "Earth is at peace after The Tournament of Power but Goku continues to train, knowing there are ever-stronger forces in the universe. With the arrival of a Saiyan warrior named Broly, Goku and Vegeta face their most dangerous challenge yet.")

#Genres
Genre.create!(name: "Action/Adventure")
Genre.create!(name: "K-dramas")
Genre.create!(name: "Comedies")
Genre.create!(name: "Fantasies")
Genre.create!(name: "Thrillers")

#Attaching Thumbnails and Videos for Shows

#Itaewon Class
s1thumbnail = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/thumbnails/itaewonclass.png')
s1.thumbnail.attach(io: s1thumbnail, filename: 'itaewonclass.png')

s1video = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/Shows/ItaewonClass.mp4')
s1.video.attach(io: s1video, filename: 'ItaewonClass.mp4')

#New Girl
s2thumbnail = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/thumbnails/newgirl.jpeg')
s2.thumbnail.attach(io: s2thumbnail, filename: 'newgirl.jpeg')

s2video = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/Shows/newgirl.mp4')
s2.video.attach(io: s2video, filename: 'newgirl.mp4')

#Hospital Playlist
s3thumbnail = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/thumbnails/hospitalplaylist.jpeg')
s3.thumbnail.attach(io: s3thumbnail, filename:'hospitalplaylist.jpeg')

s3video = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/Shows/hospitalplaylist.mp4')
s3.video.attach(io: s3video, filename: 'hospitalplaylist.mp4')

#CLOY
s4thumbnail = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/thumbnails/clo.jpeg')
s4.thumbnail.attach(io: s4thumbnail, filename: 'clo.jpeg')

s4video = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/Shows/cloy.mp4')
s4.video.attach(io: s4video, filename: 'cloy.mp4')

#SquidGame
s5thumbnail = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/thumbnails/squidgame.jpeg')
s5.thumbnail.attach(io: s5thumbnail, filename: 'squidgame.jpeg')

s5video = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/Shows/squidgame.mp4')
s5.video.attach(io: s5video, filename: 'squidgame.mp4')

#My Name
s6thumbnail = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/thumbnails/myname.jpeg')
s6.thumbnail.attach(io: s6thumbnail, filename: 'myname.jpeg')

s6video = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/Shows/myname.mp4')
s6.video.attach(io: s6video, filename: 'myname.mp4')

#The Last Dance
s7thumbnail = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/thumbnails/thelastdance.jpeg')
s7.thumbnail.attach(io: s7thumbnail, filename: 'thelastdance.jpeg')

s7video = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/Shows/thelastdance.mp4')
s7.video.attach(io: s7video, filename: 'thelastdance.mp4')

#Top Boy
s8thumbnail = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/thumbnails/topboy.jpg')
s8.thumbnail.attach(io: s8thumbnail, filename: 'topboy.jpg')

s8video = open('https://kooflix-seeds.s3.us-west-1.amazonaws.com/Shows/topboy.mp4')
s8.video.attach(io: s8video, filename: 'topboy.mp4')


#Attaching Thumbnails and Videos for Movies





