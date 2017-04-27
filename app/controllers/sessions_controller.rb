class SessionsController < ApplicationController

  def new 

  end 

  def create 
    user = User.find_by(email: params[:input_email])
    if user && user.authenticate(params[:input_password])
      session[:user_id] = user.id
      flash[:success] ="Successfully logged in!"
      redirect_to "/events"
    else 
      flash[:danger] = "Invalid Email or Password!"
      redirect_to "/login"
    end 
  end 

  def destroy 
    session[:user_id] = nil 
    flash[:success] = "Successfully logged out!"
    redirect_to "/login"
  end 

end
