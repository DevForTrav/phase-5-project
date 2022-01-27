class CoffeeShop < ApplicationRecord
    has_many :locations, :dependent => :destroy
    has_many :favorites
    has_many :users, through: :favorites

    validates :name, uniqueness: true
    
end
