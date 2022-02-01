class User < ApplicationRecord
    has_many :reviews
    has_many :favorites
    has_many :locations, through: :favorites
    has_secure_password

    validates :email, uniqueness: true
end
