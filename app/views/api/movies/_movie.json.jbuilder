json.extract! movie, :id, :title, :year, :genre_ids, :list_movie_ids
json.description movie.description
json.movieUrl url_for(movie.movie)
json.imageUrl url_for(movie.image)