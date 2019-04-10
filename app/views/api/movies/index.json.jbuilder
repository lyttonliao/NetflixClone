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
