# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create!(email: 'freetrial@gmail.com', password: 'password');


movies = Movie.create([{
    title: 'Captain America', 
    description: 'Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls.'),
    year: 2019

}])
# videos
m1 = Movie.create!(title: 'Captain America', 
description: 'Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls.'),
year: 2019)
m1_movie = open(https://s3.amazonaws.com/flixit-videos-dev/PoQxhzUX8V8TP5wrzkLVniVy);
m1.movie.attach(io: m1_movie, filename: 'PoQxhzUX8V8TP5wrzkLVniVy')
m1.image.attach()