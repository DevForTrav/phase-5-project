class LocationSerializer < ActiveModel::Serializer
  attributes :id, :street_address, :city, :state, :zip, :coffee_shop_id
  belongs_to :coffee_shop
  
end
