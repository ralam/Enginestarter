class FixRewardColumnNames < ActiveRecord::Migration
  def change
    rename_column :rewards, :reward_level, :level
    rename_column :rewards, :reward_title, :title
    rename_column :rewards, :reward_info, :info
  end
end
