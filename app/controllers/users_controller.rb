class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        session[:location] = user.location
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    def destroy
        user = User.find(params[:id])
        user.delete
        head :no_content
    end

    private 

    def user_params
        params.permit(:first_name, :last_name, :email, :age, :profile_image, :account_type, :is_verified, :password, :password_confirmation)
    end
end


# {
# 	"first_name": "Travis",
# 	"last_name": "Courtney",
# 	"email": "travis@angry-fly.com",
# 	"age": 26,
# 	"profile_image": "test",
# 	"account_type": "admin",
# 	"is_verified": true,
# 	"password": "Password123",
# 	"password_confirmation": "Password123"
# }