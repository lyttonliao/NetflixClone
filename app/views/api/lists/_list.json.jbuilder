json.extract! list, :id, :list_movie_ids
json.user_id current_user.id

json.list_movies do
    list.list_movies do |list_movie|
        json.set! list_movie.id do
            json.partial! 'api/list_movies/list_movie', list_movie: list_movie
        end
    end
end