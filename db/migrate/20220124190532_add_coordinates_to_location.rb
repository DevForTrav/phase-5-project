class AddCoordinatesToLocation < ActiveRecord::Migration[6.1]
  def change
    add_column :locations, :coordinates, :string
  end
end
