class CoffeeShopImagesController < ApplicationController
    skip_before_action :authorize
    require 'httparty'
    require 'base64'    
    require_relative '../../.api_key.rb'

    def index
        image = HTTParty.get("https://maps.googleapis.com/maps/api/place/photo?photo_reference=#{image_params[:photo_reference]}&maxwidth=400&key=#{$api_key}").body 
        encodedImage = Base64.encode64(image)
        render json: encodedImage
    end

    def image_params
        params.permit(:photo_reference)
    end
end
