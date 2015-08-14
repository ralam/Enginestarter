class CorrectProjectImageColumnName < ActiveRecord::Migration
  def change
    rename_column :projects, :url, :image_url
  end
end
