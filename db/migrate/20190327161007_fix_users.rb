class FixUsers < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :username
    remove_column :users, :username
    add_index :users, :session_token
  end
end
