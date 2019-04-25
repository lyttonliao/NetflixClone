json.list_movies do
    debugger
    @list_movies.each do |list_movie|
        json.set! list_movie.id do
            json.partial! 'api/list_movies/list_movie', list_movie: list_movie
        end
    end
end