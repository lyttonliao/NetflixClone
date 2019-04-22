json.list do
    json.extract! list, :id, :list_movie_ids
    json.user_id current_user.id
end

json.list_movies do
    @list_movies.each do |list_movie|
        json.set! list_movie.id do
            json.partial! 'api/list_movies/list_movie', list_movie: list_movie
        end
    end
end

json.movies do
    @movies.each do |movie|
        json.set! movie.id do
            json.partial! 'api/movies/movie', movie: movie
        end
    end
end

json.genres do
    @genres.each do |genre|
        json.set! genre.id do
            json.partial! 'api/genres/genre', genre: genre
        end
    end
end