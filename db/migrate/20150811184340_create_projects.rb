class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :goal, null: false
      t.date :end_date, null: false
      t.integer :owner_id, null: false
      t.integer :category_id, null: false
      t.timestamps null: false
    end

    add_index :projects, :category_id
    add_index :projects, :owner_id
  end
end
