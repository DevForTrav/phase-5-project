class FavoritesController < ApplicationController
    def index
        favorites = Favorite.all
        render json: favorites
    end

    def create
        favorite = Favorite.find_or_create_by!(favorite_params)
        render json: favorite, status: :created
    end

    def show
        favorite = Favorite.find_by(favorite_params)
        render json: favorite
    end

    def destroy
        favorite = Favorite.find_by(favorite_params)
        favorite.delete
        head :no_content
    end

    private

    def favorite_params
        params.permit(:user_id, :location_id)
    end
end
