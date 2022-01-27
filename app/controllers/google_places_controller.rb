class GooglePlacesController < ApplicationController

    attr_accessor :local_coffee_shops
    require 'httparty'
    require_relative '../../.api_key.rb'

    def initialize
        @local_coffee_shops = []    
    end

    def index
        coffee_shops = HTTParty.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffee+shop&location=#{search_params[:latitude]},#{search_params[:longitude]}, &radius=100&region=us&type=cafe,bakery&key=#{$api_key}")
        exclude_franchise(coffee_shops["results"])
        # is_operational?
        render json: @local_coffee_shops
    end 
    


    private 

    # def is_operational?
    #     @local_coffee_shops.map{ 
    #         |coffee_shop|
    #             unless coffee_shop["business_status"] != "OPERATIONAL"
    #                 @local_coffee_shops.push(coffee_shop)
    #             end
    #     }
    # end

    def exclude_franchise(google_coffee_shops)
        google_coffee_shops.map {
            |coffee_shop|
                franchise_names = ["starbucks", "dunkin'", "arby's", "mcdonald's", "wendy's"]
                name = coffee_shop["name"].downcase
                unless franchise_names.include?(name)
                    @local_coffee_shops.push(coffee_shop)
                end
        }
    end


    def search_params
        params.permit( :latitude, :longitude)
    end
end
