class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        @user.list = List.new(user_id: @user.id)
        debugger
        if @user.save
            @user.list.save
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
