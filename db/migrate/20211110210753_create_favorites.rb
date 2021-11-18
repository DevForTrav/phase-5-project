class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.boolean :is_favorited
      t.references :user, null: false, foreign_key: true
      t.references :location, null: false, foreign_key: true
      t.references :coffee_shop, null: false, foreign_key: true

      t.timestamps
    end
  end
end
