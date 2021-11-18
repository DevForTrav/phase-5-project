class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: comments
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.delete
        head :no_content
    end

    private

    def comment_params
        params.permit(:comment_body, :user_id, :review_id)
    end
end
