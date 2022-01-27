class CoffeeShopsController < ApplicationController
    def index
        coffee_shops = CoffeeShop.all
        render json: coffee_shops
    end

    def create
        coffee_shop = CoffeeShop.find_or_create_by!(coffee_shop_params)
        render json: coffee_shop, status: :created
    end

    def show
        coffee_shop = CoffeeShop.find(params[:id])
        render json: coffee_shop
    end

    def destroy
        coffee_shop = CoffeeShop.find(params[:id])
        coffee_shop.delete
        head :no_content
    end

    private

    def coffee_shop_params
        params.permit(:name, :house_roasted, :roaster_name)
    end
end
