class RemoveIsFavoritedFromFavorites < ActiveRecord::Migration[6.1]
  def change
    remove_column :favorites, :is_favorited, :boolean
  end
end
