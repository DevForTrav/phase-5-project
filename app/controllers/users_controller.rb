class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    before_action :is_admin, only: :index

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        user = User.find_by(id: params[:id])
        user.update(user_params)
        render json: user
    end

    def show
        render json: @current_user
    end

    def destroy
        user = User.find(params[:id])
        user.delete
        head :no_content
    end

    def locations
        user = User.find_by(user_params)
        render json: user.locations
    end

    private 

    def user_params
        params.permit(:id, :first_name, :last_name, :email, :age, :profile_image, :account_type, :is_verified, :password, :password_confirmation)
    end
end