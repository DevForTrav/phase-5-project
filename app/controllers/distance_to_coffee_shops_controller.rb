class DistanceToCoffeeShopsController < ApplicationController
    require 'httparty'
    require_relative '../../.api_key.rb'
    skip_before_action :authorize

    def index
        distance = HTTParty.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins=#{distance_params[:origins]}&destinations=#{distance_params[:destinations]}&key=#{$api_key}")
        distance = format_distance(distance)
        render json: distance
    end

    private

    def distance_params
        params.permit(:origins, :destinations)
    end

    def format_distance(distance)
        distance["time"] = distance["rows"][0]["elements"][0]["duration"]["text"]
        distance["miles"] = distance["rows"][0]["elements"][0]["distance"]["text"].to_f * 0.62137
        return {
            "miles": "#{distance["miles"].round(2)} miles",
            "duration": distance["time"]
         }
    end
end
