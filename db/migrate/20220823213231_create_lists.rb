class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.integer :video_id, null: false
      t.integer :profile_id, null: false

      t.timestamps
    end
    add_index :lists, :video_id
    add_index :lists, :profile_id
    add_index :lists, [:profile_id, :video_id], unique: true
  end
end
