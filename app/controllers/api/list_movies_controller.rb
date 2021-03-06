class Api::ListMoviesController < ApplicationController
    before_action :ensure_logged_in

    def index
      @list_movies = ListMovie.all.where(:list_id => current_user.list.id)
      # @movies = Movie.all
      # @lists = List.all
      render :index
    end
  
    def create
      @list_movie = ListMovie.new()
      @list_movie.list_id = current_user.list.id
      @list_movie.movie_id = params[:movie][:id].to_i
      if @list_movie.save
        render :show
      else
        render json: @list_movie.errors.full_messages, status: 422
      end
    end
  
    
    def show
        @list_movie = ListMovie.find(params[:id])
        render :show
    end

    def destroy
      @list_movie = ListMovie.find(params[:id])
      @list_movie.destroy
    end
  
    # def list_movie_params
    #   params.require(:movie).permit(:movie_id)
    # end
  end