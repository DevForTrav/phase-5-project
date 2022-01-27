class AddFormattedAddressToLocation < ActiveRecord::Migration[6.1]
  def change
    add_column :locations, :formatted_address, :string
  end
end
