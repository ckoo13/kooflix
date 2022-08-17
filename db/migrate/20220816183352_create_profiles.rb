class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.string :avatar, null: false

      t.timestamps
    end

    add_index :profiles, :name
    add_index :profiles, :user_id
    add_index :profiles, [:name, :user_id], unique: true
  end
end
