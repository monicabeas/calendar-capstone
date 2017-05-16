class AddedAlldayColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :allDay, :boolean

  end
end
