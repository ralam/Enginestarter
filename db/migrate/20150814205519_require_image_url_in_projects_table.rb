class RequireImageUrlInProjectsTable < ActiveRecord::Migration
  def change
    change_column :projects, :image_url, :string, null: false
  end
end
