class CreateGenreMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :genre_movies do |t|
      t.integer :movie_id, null: false
      t.integer :genre_id, null: false

      t.timestamps
    end
    add_index :genre_movies, :genre_id, unique: true
    add_index :genre_movies, :movie_id, unique: true
  end
end
