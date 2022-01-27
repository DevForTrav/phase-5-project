class RemoveCoffeeShopIdFromFavorites < ActiveRecord::Migration[6.1]
  def change
    remove_column :favorites, :coffee_shop_id, :foreign_key
  end
end
