class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.integer :reward_level, null: false
      t.string :reward_title, null: false
      t.string :reward_info, null: false
      t.integer :project_id, null: false
      t.timestamps null: false
    end

    add_index :rewards, :project_id
  end
end
