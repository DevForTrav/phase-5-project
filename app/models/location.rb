class Location < ApplicationRecord
  has_many :users, through: :favorites
  belongs_to :coffee_shop
end
