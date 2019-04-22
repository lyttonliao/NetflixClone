# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

MovieGenre.destroy_all
Genre.destroy_all
Movie.destroy_all
User.destroy_all
user = User.create(email: 'freetrial@gmail.com', password: 'password')

m1 = Movie.create(title: 'Captain America', description: "Captain Marvel comes out of hiding and whoops ass", year: 2019)
m1_movie = open('https://s3.amazonaws.com/flixit-videos-dev/PoQxhzUX8V8TP5wrzkLVniVy')
m1_image = open('https://s3.amazonaws.com/flixit-videos-dev/RKftvZCLpCttdrQjqDpWAruY')
m1.movie.attach(io: m1_movie, filename: 'Captain Marvel (TV Spot).mp4')
m1.image.attach(io: m1_image, filename: 'Captain_Marvel_poster.jpg')

m2 = Movie.create(title: 'Alita Battle Angel', 
description:  "Set several centuries in the future, the abandoned Alita is found in the scrapyard of Iron City by Ido, a compassionate cyber-doctor who takes the unconscious cyborg Alita to his clinic.",
year: 2019)
m2_movie = open('https://s3.amazonaws.com/flixit-videos-dev/owW4Sq6UgpQrZ55ZnyYEd7F7')
m2_image = open('https://s3.amazonaws.com/flixit-videos-dev/pwwuMWM81DuhRzMm4GY66diS')
m2.movie.attach(io: m2_movie, filename: 'alita_battle_angel.mp4')
m2.image.attach(io: m2_image, filename: 'alita_poster.jpg')

m3 = Movie.create(title: 'Hellboy', 
description: 'Based on the graphic novels by Mike Mignola, Hellboy, caught between the worlds of the supernatural and human, battles an ancient sorceress bent on revenge',
year: 2019)
m3_movie = open('https://s3.amazonaws.com/flixit-videos-dev/kziJrinv57u4fMpBtSQLCwgd')
m3_image = open('https://s3.amazonaws.com/flixit-videos-dev/cuU4pGedsfNnpKDsAwPbKVQq')
m3.movie.attach(io: m3_movie, filename: 'hellboy.mp4')
m3.image.attach(io: m3_image, filename: 'hellboy_poster.jpg')

m4 = Movie.create(title: 'The Silence', 
description: "When the world is under attack from creatures who hunt their human prey by sound, a teenager who lost her hearing at 13, and her family, seek safety in a remote refuge. However, they discover a cult who are eager to exploit her heightened senses.",
year: 2019)
m4_movie = open('https://s3.amazonaws.com/flixit-videos-dev/tdqGCui7hu9v73dXDZjCVJaK')
m4_image = open('https://s3.amazonaws.com/flixit-videos-dev/ob5Ha7tRaDgcxqTCcWMGwivn')
m4.movie.attach(io: m4_movie, filename: 'silence.mp4')
m4.image.attach(io: m4_image, filename: 'silence_poster')

m5 = Movie.create(title: 'Triple Frontier', 
description: "Former Special Forces operatives reunite to plan a heist in a sparsely populated multi-border zone of South America. For the first time in their prestigious careers, these unsung heroes undertake this dangerous mission for themselves instead of the country.",
year: 2019);
m5_movie = open('https://s3.amazonaws.com/flixit-videos-dev/Gfbf6M9PSUJFMz8qDJNJqxTW')
m5_image = open('https://s3.amazonaws.com/flixit-videos-dev/hgXPdA6CaUHzuftzCWZ6oGhM')
m5.movie.attach(io: m5_movie, filename: 'triple_frontier.mp4')
m5.image.attach(io: m5_image, filename: 'triple_frontier.jpg')

m6 = Movie.create(title: 'The Wake of Light', 
description: "A young woman slowly losing her faith while caring for her aging father meets a charismatic young man on a cross-country road trip, who falls for her.",
year: 2019)
m6_movie = open('https://s3.amazonaws.com/flixit-videos-dev/8KsXshsmAHarAFHUVfmMVUBt')
m6_image = open('https://s3.amazonaws.com/flixit-videos-dev/nxxxKhNhBKcQAZRrpVHpHMGr')
m6.movie.attach(io: m6_movie, filename: 'wake_of_light.mp4')
m6.image.attach(io: m6_image, filename: 'wake_of_light.jpg')

m7 = Movie.create(title: 'Avengers End Game', year: 2019, description: 'Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.')
m7_movie = open('https://s3.amazonaws.com/flixit-videos-dev/8idMr54P3qLVEBVxFLLhGVGX')
m7_image = open('https://s3.amazonaws.com/flixit-videos-dev/CpVCzKHXnoeDY84PcSTCePYC')
m7.movie.attach(io: m7_movie, filename: 'avengers.mp4')
m7.image.attach(io: m7_image, filename: 'avengers.jpg')

m8 = Movie.create(title: 'Bumblebee', year: '2018', description: 'On the run in the year of 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.')
m8_movie = open('https://s3.amazonaws.com/flixit-videos-dev/tMnMVApRoLxRHfAhTxqpviGS')
m8_image = open('https://s3.amazonaws.com/flixit-videos-dev/aHRKQAqNMpasAoZZuZhpBia7')
m8.movie.attach(io: m8_movie, filename: 'bumblebee.mp4')
m8.image.attach(io: m8_image, filename: 'bumblebee.jpg')

m9 = Movie.create(title: 'Aladdin', year: 2019, description: 'Young Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie.')
m9_movie = open('https://s3.amazonaws.com/flixit-videos-dev/KZndyc1rpYAXSeCrc4khRNLX')
m9_image = open('https://s3.amazonaws.com/flixit-videos-dev/wEpxPscdtuGkA2Rb5ZP9mAjy')
m9.movie.attach(io: m9_movie, filename: 'aladdin.mp4')
m9.image.attach(io: m9_image, filename: 'aladdin.jpg')

m10 = Movie.create(title: 'How to Train Your Dragon', year: 2019, description: 'What began as an unlikely friendship between an adolescent Viking and a fearsome Night Fury dragon has become an epic adventure spanning their lives.')
m10_movie = open('https://s3.amazonaws.com/flixit-videos-dev/u2BmnCYejBbJj7NtYSBvynN4')
m10_image = open('https://s3.amazonaws.com/flixit-videos-dev/C7zEPXi8qBGWtChnmWuCMHin')
m10.movie.attach(io: m10_movie, filename: 'how_to_train_dragon.mp4')
m10.image.attach(io: m10_image, filename: 'how_to_train_dragon.jpg')

m11 = Movie.create(title: 'Unfinished Love', year: 2019, description: "Nothing - not time, distance, or war - can keep Robert from pursuing the love of his life.")
m11_movie = open('https://s3.amazonaws.com/flixit-videos-dev/CRpWmRFwoc9vNLYFd9NKdT1p')
m11_image = open('https://s3.amazonaws.com/flixit-videos-dev/udi6nVFnkRKoqVA8XNwkxj3y')
m11.movie.attach(io: m11_movie, filename: 'unfinished_love.mp4')
m11.image.attach(io: m11_image, filename: 'unfinished_love.jpg')

m12 = Movie.create(title: 'Nutcracker', year: 2018, description: 'Young Clara needs a magical, one-of-a-kind key to unlock a box that contains a priceless gift.')
m12_movie = open('https://s3.amazonaws.com/flixit-videos-dev/pjs8xHmZBo41aTXYUxJJd9Fe')
m12_image = open('https://s3.amazonaws.com/flixit-videos-dev/FdBD3Vfivg9wGXTa5StrEePX')
m12.movie.attach(io: m12_movie, filename: 'nutcracker.mp4')
m12.image.attach(io: m12_image, filename: 'nutcracker.jpeg')

m13 = Movie.create(title: 'The Black Cauldron', year: 1985, description: 'Taran must locate the magical black cauldron before the Horned King is able to use its mystical powers to summon an army of the undead.')
m13_movie = open('https://s3.amazonaws.com/flixit-videos-dev/ij4jAai9cRELbUjG7mSgzBHE')
m13_image = open('https://s3.amazonaws.com/flixit-videos-dev/HRBmnJv8tnwwq5QkKfsvxZrf')
m13.movie.attach(io: m13_movie, filename: 'black_cauldron.mp4')
m13.image.attach(io: m13_image, filename: 'black_cauldron.jpg')

m14 = Movie.create(title: 'Beauty and The Beast', year: 1991, description: 'A selfish prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.') 
m14_movie = open('https://s3.amazonaws.com/flixit-videos-dev/vAAXM3UrMQ36RU6SjCpq2BxU')
m14_image = open('https://s3.amazonaws.com/flixit-videos-dev/VDqxKAmKPMTPyP6xGiZyRb4B')
m14.movie.attach(io: m14_movie, filename: 'beauty_and_beast.mp4')
m14.image.attach(io: m14_image, filename: 'beauty_and_beast.jpg')

m15 = Movie.create(title: 'The Lion King', year: 1994, description: "A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.")
m15_movie = open('https://s3.amazonaws.com/flixit-videos-dev/SCtN8WwFpVhUoCthncLkrKwT')
m15_image = open('https://s3.amazonaws.com/flixit-videos-dev/BhMFqQv2otpTVunFZSjAHfdZ')
m15.movie.attach(io: m15_movie, filename: 'lion_king.mp4')
m15.image.attach(io: m15_image, filename: 'lion_king.jpg')

m16 = Movie.create(title: 'Tangled', year: 2010, description: 'The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.')
m16_movie = open('https://s3.amazonaws.com/flixit-videos-dev/a1z93bnvUcHVVcjhfqKUjsUc')
m16_image = open('https://s3.amazonaws.com/flixit-videos-dev/nFMUtYx4asrdCcrtC9hJUQfU')
m16.movie.attach(io: m16_movie, filename: 'tangled.mp4')
m16.image.attach(io: m16_image, filename: 'tangled.jpg')

m17 = Movie.create(title: 'Spider-Man: Into the Spider-Verse', year: 2018, description: 'Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.')
m17_movie = open('https://s3.amazonaws.com/flixit-videos-dev/qMZTzJmmomZb8sDQ7sBe4Bjv')
m17_image = open('https://s3.amazonaws.com/flixit-videos-dev/1bDLL5d8haaWLFpJg5sG9U2y')
m17.movie.attach(io: m17_movie, filename: 'spider_verse.mp4')
m17.image.attach(io: m17_image, filename: 'spider_verse.jpg')

m18 = Movie.create(title: 'Iron Man 2', year: 2010, description: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.")
m18_movie = open('https://s3.amazonaws.com/flixit-videos-dev/XsBMymfqUj4QWMzsD8TTE1Jg')
m18_image = open('https://s3.amazonaws.com/flixit-videos-dev/TYKgAD1PkGvfSQoPgp42gunx')
m18.movie.attach(io: m18_movie, filename: 'ironman.mp4')
m18.image.attach(io: m18_image, filename: 'ironman.jpg')

g1 = Genre.create!(name: 'action')
g2 = Genre.create!(name: 'disney')
g3 = Genre.create!(name: 'scifi')
g4 = Genre.create!(name: 'drama')
g5 = Genre.create!(name: 'superhero')

mg1 = MovieGenre.create!(movie_id: m1.id, genre_id: g1.id)
mg2 = MovieGenre.create!(movie_id: m1.id, genre_id: g5.id)

mg3 = MovieGenre.create!(movie_id: m2.id, genre_id: g1.id)
mg4 = MovieGenre.create!(movie_id: m2.id, genre_id: g3.id)

mg5 = MovieGenre.create!(movie_id: m3.id, genre_id: g1.id)
mg6 = MovieGenre.create!(movie_id: m3.id, genre_id: g3.id)
mg7 = MovieGenre.create!(movie_id: m3.id, genre_id: g5.id)

mg10 = MovieGenre.create!(movie_id: m4.id, genre_id: g4.id)
mg11 = MovieGenre.create!(movie_id: m4.id, genre_id: g3.id)

mg12 = MovieGenre.create!(movie_id: m5.id, genre_id: g1.id)

mg13 = MovieGenre.create!(movie_id: m6.id, genre_id: g4.id)

mg14 = MovieGenre.create!(movie_id: m7.id, genre_id: g1.id)
mg15 = MovieGenre.create!(movie_id: m7.id, genre_id: g5.id)
mg16 = MovieGenre.create!(movie_id: m7.id, genre_id: g3.id)

mg17 = MovieGenre.create!(movie_id: m8.id, genre_id: g5.id)
mg18 = MovieGenre.create!(movie_id: m8.id, genre_id: g3.id)
mg19 = MovieGenre.create!(movie_id: m8.id, genre_id: g1.id)

mg20 = MovieGenre.create!(movie_id: m9.id, genre_id: g2.id)

mg21 = MovieGenre.create!(movie_id: m10.id, genre_id: g3.id)
mg22 = MovieGenre.create!(movie_id: m10.id, genre_id: g4.id)

mg23 = MovieGenre.create!(movie_id: m11.id, genre_id: g4.id)

mg24 = MovieGenre.create!(movie_id: m12.id, genre_id: g2.id)
mg25 = MovieGenre.create!(movie_id: m12.id, genre_id: g4.id)

mg26 = MovieGenre.create!(movie_id: m13.id, genre_id: g2.id)

mg27 = MovieGenre.create!(movie_id: m14.id, genre_id: g2.id)

mg28 = MovieGenre.create!(movie_id: m15.id, genre_id: g2.id)

mg29 = MovieGenre.create!(movie_id: m16.id, genre_id: g4.id)
mg30 = MovieGenre.create!(movie_id: m16.id, genre_id: g2.id)

mg31 = MovieGenre.create!(movie_id: m17.id, genre_id: g5.id)

mg32 = MovieGenre.create!(movie_id: m18.id, genre_id: g5.id)







