class Api::GenresController < ApplicationController
    before_action :ensure_logged_in

    def index
        @genres = Genre.all
        # debugger
        render :index
    end

    def show
        @genre = Genre.find(params[:id])
    end
end