class GooglePlacesController < ApplicationController

    attr_accessor :local_coffee_shops
    skip_before_action :authorize
    require 'httparty'

    def initialize
        @local_coffee_shops = []    
    end

    def index
        coffee_shops = HTTParty.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffee+shop&location=35.6004,-82.4918, &radius=15&region=us&type=cafe,bakery&key=')
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
                franchise_names = ["starbucks", "dunkin'", "arby's", "mcdonald's"]
                name = coffee_shop["name"].downcase
                unless franchise_names.include?(name)
                    @local_coffee_shops.push(coffee_shop)
                end
        }
    end


    # def search_params

    # end
end
