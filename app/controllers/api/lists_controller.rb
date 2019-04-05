class Api::ListsController < ApplicationController
    before_action :ensure_logged_in

    def show
        @list = List.find(params[:id])
    end
  
    private
    def list_params
        params.require(:list).permit(:user_id)
    end

  end