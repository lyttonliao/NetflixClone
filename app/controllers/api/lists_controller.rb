class Api::ListsController < ApplicationController
    
    def show
      @list = List.find(params[:id])
      if @list
        render "api/lists/show"
      else
        render json: ["List does not exist"], status: 404
      end
    end
  
  end