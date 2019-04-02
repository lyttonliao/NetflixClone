@movies.each do |movie|
    json.set! movie.id do
        json.extract movie, :id, :title, :year, :description
        json.movieUrl url_for(movie.movie)
        json.imageUrl url_for(movie.image)
    end
end