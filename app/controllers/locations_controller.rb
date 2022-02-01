class LocationsController < ApplicationController

    attr_accessor :distance

    skip_before_action :authorize 
    require 'httparty'
    require_relative '../../.api_key.rb'

    def index
        locations = Location.all
        # locations = get_distance(locations)
        render json: locations
    end

    def create
        location = Location.find_or_create_by!(location_params)
        render json: location, status: :created
    end

    def show
        location = Location.find(params[:id])
        render json: location
    end

    def destroy
        location = Location.find(params[:id])
        location.delete
        head :no_content
    end

    private

    def get_distance(locations)
        location_array = []
        locations.each { |coffee_shop_location| 
            distance = HTTParty.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins=#{params[:user_location]}&destinations=#{coffee_shop_location[:coordinates]}&key=AIzaSyDRl6up6RRif7PK2fcJYeEFcx_xtMOleYQ")
            distance = { 
                "distance": distance["rows"][0]["elements"][0]["distance"]["text"],
                "distance": distance["rows"][0]["elements"][0]["duration"]["text"]
            }
            byebug
        }


    end

    def location_params
        params.permit(:street_address, :city, :state, :zip, :coffee_shop_id, :formatted_address, :place_id, :photo_reference, :coordinates, :user_location)
    end

end
