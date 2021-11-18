class FavoritesController < ApplicationController
    def index
        favorites = Favorite.all
        render json: favorites
    end

    def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite, status: :created
    end

    def show
        favorite = Favorite.find(params[:id])
        render json: favorite
    end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.delete
        head :no_content
    end

    private

    def favorite_params
        params.permit(:is_favorited, :user_id, :location_id, :coffee_shop_id)
    end
end
