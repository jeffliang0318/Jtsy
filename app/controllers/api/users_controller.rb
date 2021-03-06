class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      #make new shopping cart for them
      # ShoppingCar

      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
      @user = User.find(params[:id])
      render "api/users/show"
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
