class User < ApplicationRecord
    has_many :reviews
    has_many :favorites
    has_many :coffee_shops, through: :favorites
    has_many :locations, through: :favorites
    has_one :user_location
    has_secure_password

    validates :email, uniqueness: true
end
