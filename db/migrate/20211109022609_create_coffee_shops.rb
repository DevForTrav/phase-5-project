class CreateCoffeeShops < ActiveRecord::Migration[6.1]
  def change
    create_table :coffee_shops do |t|
      t.string :name
      t.boolean :house_roasted
      t.string :roaster_name

      t.timestamps
    end
  end
end
