class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create


    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            # session[:location] = params[:location]
            render json: user
        else
            render json: {errors: ["Incorrect email or password" ] }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        # session.delete :location
        head :no_content
    end
end
