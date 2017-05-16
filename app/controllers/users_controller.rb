class UsersController < ApplicationController
  
  def new 

  end 

  def create
    @user = User.new(
      name: params[:input_name],
      email: params[:input_email],
      password: params[:password], 
      password_confirmation: params[:password_confirmation]
      )

    if @user.save 
      session[:user_id] = @user.id
      flash[:success] = "Successfully created account!"
      redirect_to "/events"
    else 
      flash[:danger] = "Invalid email or password!"
      redirect_to "/signup"
    end 

  end 

 


end
