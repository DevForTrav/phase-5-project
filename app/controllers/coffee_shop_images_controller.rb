class CoffeeShopImagesController < ApplicationController
    skip_before_action :authorize
    require 'httparty'
    require_relative '../../.api_key.rb'
    def index
        image = HTTParty.get("https://maps.googleapis.com/maps/api/place/photo?photo_reference=Aap_uEAFivZRd-CG6oyawvPto3GKFjvAcS2stV2Tr9ZDbM8K-QuKNwIUnurk5_XYofSEP6WAWWHa3-BL2Ws7VUtNUJPMNgu8fufpB2Hi5cy_62vAj9VGibVZJBbCxxOEA7DqHAmBeQ7du-5rs83iV2DbSXSLsrCyVS3PTAGwBEifPgqBXDrl&maxwidth=400&key=#{$api_key}").body
        render json: image
    end
end
