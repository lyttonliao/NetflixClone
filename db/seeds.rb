# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user = User.create!(email: 'freetrial@gmail.com', password: 'password');

}])
# videos
Movie.destroy_all
m1 = Movie.create!(title: 'Captain America', 
description: "Captain Marvel comes out of hiding and whoops ass",
year: 2019)
m1_movie = open(https://s3.amazonaws.com/flixit-videos-dev/PoQxhzUX8V8TP5wrzkLVniVy);
m1_photo = open(https://s3.amazonaws.com/flixit-videos-dev/RKftvZCLpCttdrQjqDpWAruY)
m1.movie.attach(io: m1_movie, filename: 'Captain Marvel (TV Spot).mp4')
m1.image.attach(io: m1_photo, filename: 'Captain_Marvel_poster.jpg')


m2 = Movie.create!(title: 'Alita Battle Angel', 
description:  "Set several centuries in the future, the abandoned Alita is found in the scrapyard of Iron City by Ido, a compassionate cyber-doctor who takes the unconscious cyborg Alita to his clinic.",
year: 2019)
m2_movie = open(https://s3.amazonaws.com/flixit-videos-dev/owW4Sq6UgpQrZ55ZnyYEd7F7);
m2_photo = open(https://s3.amazonaws.com/flixit-videos-dev/pwwuMWM81DuhRzMm4GY66diS)
m2.movie.attach(io: m2_movie, filename: 'alita_battle_angel.mp4')
m2.image.attach(io: m2_photo, filename: 'alita_poster.jpg')

m3 = Movie.create!(title: 'Hellboy', 
description: 'Based on the graphic novels by Mike Mignola, Hellboy, caught between the worlds of the supernatural and human, battles an ancient sorceress bent on revenge',
year: 2019)
m3_movie = open(https://s3.amazonaws.com/flixit-videos-dev/kziJrinv57u4fMpBtSQLCwgd);
m3_photo = open(https://s3.amazonaws.com/flixit-videos-dev/cuU4pGedsfNnpKDsAwPbKVQq)
m3.movie.attach(io: m3_movie, filename: 'hellboy.mp4')
m3.image.attach(io: m3_photo, filename: 'hellboy_poster.jpg')

m4 = Movie.create!(title: 'The Silence', 
description: "When the world is under attack from creatures who hunt their human prey by sound, a teenager who lost her hearing at 13, and her family, seek safety in a remote refuge. However, they discover a cult who are eager to exploit her heightened senses.",
year: 2019)
m4_movie = open(https://s3.amazonaws.com/flixit-videos-dev/tdqGCui7hu9v73dXDZjCVJaK);
m4_photo = open(https://s3.amazonaws.com/flixit-videos-dev/ob5Ha7tRaDgcxqTCcWMGwivn)
m4.movie.attach(io: m4_movie, filename: 'silence.mp4')
m4.image.attach(io: m4_photo, filename: 'silence_poster')

m5 = Movie.create!(title: 'Triple Frontier', 
description: "Former Special Forces operatives reunite to plan a heist in a sparsely populated multi-border zone of South America. For the first time in their prestigious careers, these unsung heroes undertake this dangerous mission for themselves instead of the country.",
year: 2019)
m5_movie = open(https://s3.amazonaws.com/flixit-videos-dev/Gfbf6M9PSUJFMz8qDJNJqxTW);
m5_photo = open(https://s3.amazonaws.com/flixit-videos-dev/hgXPdA6CaUHzuftzCWZ6oGhM)
m5.movie.attach(io: m5_movie, filename: 'triple_frontier.mp4')
m5.image.attach(io: m5_photo, filename: 'triple_frontier.jpg')

m6 = Movie.create!(title: 'The Wake of Light', 
description: "A young woman slowly losing her faith while caring for her aging father meets a charismatic young man on a cross-country road trip, who falls for her.",
year: 2019)
m6_movie = open(https://s3.amazonaws.com/flixit-videos-dev/8KsXshsmAHarAFHUVfmMVUBt);
m6_photo = open(https://s3.amazonaws.com/flixit-videos-dev/nxxxKhNhBKcQAZRrpVHpHMGr)
m6.movie.attach(io: m6_movie, filename: 'wake_of_light.mp4')
m6.image.attach(io: m6_photo, filename: 'wake_of_light.jpg')

Genre.destroy_all
g1 = Genre.create!(name: 'action')
g2 = Genre.create!(name: 'dance')
g3 = Genre.create!(name: 'scifi')
g4 = Genre.create!(name: 'drama')
g5 = Genre.create!(name: 'superhero')

MovieGenre.destroy_all
mg1 = MovieGenre.create!(movie_id: 1, genre_id: 1)
mg2 = MovieGenre.create!(movie_id: 1, genre_id: 5)

mg3 = MovieGenre.create!(movie_id: 2, genre_id: 1)
mg4 = MovieGenre.create!(movie_id: 1, genre_id: 3)

mg5 = MovieGenre.create!(movie_id: 3, genre_id: 1)
mg6 = MovieGenre.create!(movie_id: 3, genre_id: 3)
mg7 = MovieGenre.create!(movie_id: 3, genre_id: 5)

mg10 = MovieGenre.create!(movie_id: 4, genre_id: 4)
mg11 = MovieGenre.create!(movie_id: 4, genre_id: 3)

mg12 = MovieGenre.create!(movie_id: 5, genre_id: 1)

mg13 = MovieGenre.create!(movie_id: 6, genre_id: 4)





