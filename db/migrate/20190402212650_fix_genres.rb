class FixGenres < ActiveRecord::Migration[5.2]
  def change
    remove_index :genres, :type
    remove_column :genres, :type
    add_column :genres, :name, :string, null: false
  end
end
