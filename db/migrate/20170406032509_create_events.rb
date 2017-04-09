class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title
      t.datetime :start_time
      t.datetime :end_time
      t.string :location
      t.text :description
      t.integer :user_id
      t.integer :category_id

      t.timestamps
    end
  end
end
