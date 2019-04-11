class Api::ListsController < ApplicationController
    before_action :ensure_logged_in

    # def create
    #     @list = List.new()
    #     @list.user_id = current_user.id
    #     if @list.save
    #         render :show

    def show
        @list = List.find(params[:id])
        @list_movies = ListMovie.all
        @movies = Movie.all
    end
  
    # private
    # def list_params
    #     params.require(:list).permit(:user_id)
    # end

  end