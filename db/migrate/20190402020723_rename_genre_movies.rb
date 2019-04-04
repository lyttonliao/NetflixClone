class RenameGenreMovies < ActiveRecord::Migration[5.2]
  def change
    rename_table :genre_movies, :movie_genres
  end
end
