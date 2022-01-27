class AddPlaceIdToLocation < ActiveRecord::Migration[6.1]
  def change
    add_column :locations, :place_id, :string
  end
end
