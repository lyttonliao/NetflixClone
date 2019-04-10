class FixListTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :lists, :list_name
  end
end
