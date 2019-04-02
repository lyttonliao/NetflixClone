class Api::MoviesController < ApplicationController

    # def create 
    #     @movie = Movie.new(movie_params)
    #     if @movie.save
    #         render :show
    #     else
    #         render json: ["Movie is missing required fields"]
    #     end
    # end

    def index
        @movies = Movie.all
        render :index
    end

    def show
        @movie = Movie.find_by(id: params[:id])
        render :show
    end

    private
    def movie_params
        params.require(:movie).permit(:title, :year, :description, movies: [])
    end
end
