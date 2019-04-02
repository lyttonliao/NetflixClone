json.extract movie, :id, :title, :year, :description
json.movieUrl url_for(movie.movie)
json.imageUrl url_for(movie.image)