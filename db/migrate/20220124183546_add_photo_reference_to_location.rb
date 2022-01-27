class AddPhotoReferenceToLocation < ActiveRecord::Migration[6.1]
  def change
    add_column :locations, :photo_reference, :string
  end
end
