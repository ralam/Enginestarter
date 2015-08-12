class CreateRewardings < ActiveRecord::Migration
  def change
    create_table :rewardings do |t|
      t.integer :user_id, null: false
      t.integer :reward_id, null: false
      t.timestamps null: false
    end

    add_index :rewardings, :user_id
    add_index :rewardings, :reward_id
  end
end
