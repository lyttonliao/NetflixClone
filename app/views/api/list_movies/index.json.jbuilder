@list_movie.each do |list_movie|
    json.set! list_movie.movie_id do
        json.extract! list_movie.movie, :title, :year, :description
        json.id list_movie.id
        json.list_id list_movie.list_id
        json.movie_id list_movie.movie_id
    end
end