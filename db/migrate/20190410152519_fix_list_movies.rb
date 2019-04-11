class FixListMovies < ActiveRecord::Migration[5.2]
  def change
    remove_index :list_movies, :movie_id
    add_index :list_movies, [:list_id, :movie_id], unique: true
  end
end
