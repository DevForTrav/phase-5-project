class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews
    end

    def create
        review = Review.find_or_create_by!(review_params)
        render json: review, status: :created
    end

    def show
        review = Review.find(params[:id])
        render json: review
    end

    def destroy
        review = Review.find(params[:id])
        Review.delete
        head :no_content
    end

    private 

    def review_params
        params.permit(:title, :description, :overall_rating, :ambience_description, :beverage_rating, :service_rating, :location_id, :user_id)
    end
end
