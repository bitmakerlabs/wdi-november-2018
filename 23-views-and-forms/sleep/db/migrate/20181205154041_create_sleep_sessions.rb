class CreateSleepSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :sleep_sessions do |t|
      t.integer :quantity
      t.integer :quality
      t.string :description

      t.timestamps
    end
  end
end
