class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :coffee_shop
  belongs_to :location
end
