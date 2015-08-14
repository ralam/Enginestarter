class RemoveThumbnailUrlFromProjectsTable < ActiveRecord::Migration
  def change
    remove_column :projects, :thumb_url
  end
end
