class LocationsController < ApplicationController
    def index
        locations = Location.all
        render json: locations
    end

    def create

        byebug
        # location = Location.create!(location_params)
        # render json: location, status: :created
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

    def location_params
        params.permit(:street_address, :city, :state, :zip, :coffee_shop_id)
    end

end
