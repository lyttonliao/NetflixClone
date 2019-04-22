class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        debugger
        if @user.save
            @user.list = List.new(user_id: @user.id)
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
