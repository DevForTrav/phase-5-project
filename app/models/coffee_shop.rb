class CoffeeShop < ApplicationRecord
    has_many :locations
    has_many :favorites
    has_many :users, through: :favorites
    
end
