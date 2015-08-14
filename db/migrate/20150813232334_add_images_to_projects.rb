class AddImagesToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :url, :string
    add_column :projects, :thumb_url, :string
  end
end
