class LocationSerializer < ActiveModel::Serializer
  attributes :id, :street_address, :city, :state, :zip, :coffee_shop_id, :coordinates, :formatted_address, :photo_reference, :place_id
  belongs_to :coffee_shop
  has_many :reviews, optional: true
end
