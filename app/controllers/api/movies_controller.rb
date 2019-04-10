class Api::MoviesController < ApplicationController
    before_action :ensure_logged_in

    def index
        @movies = Movie.all
        @genres = Genre.all
        @list_movies = ListMovie.all
        render :index
    end

    def show
        @movie = Movie.find(params[:id])
        render '/api/movies/show'
    end

    private
    def movie_params
        params.require(:movie).permit(:title, :year, :description)
    end
end
