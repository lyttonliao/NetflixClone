class FixMovieGenres < ActiveRecord::Migration[5.2]
  def change
    remove_index :movie_genres, :movie_id
    remove_index :movie_genres, :genre_id
    add_index :movie_genres, :movie_id
    add_index :movie_genres, :genre_id
  end
end
