class EventsController < ApplicationController
  before_action :authenticate_user!

  
  def index 
    @events = current_user.events 
  end 


  def new 

  end 

  def create 
    event = Event.create(
      title: params[:input_title],
      start_time: params[:input_start_time],
      end_time: params[:input_end_time],
      location: params[:input_location], 
      description: params[:input_description],
      category_id: params[:event][:category_id],
      user_id: current_user.id
      )
  end 
  def edit 
    @event = Event.find_by(id: params[:id])

  end

  def update 
    @event = Event.find_by(id: params[:id])
    @event.title = params[:input_title],
    @event.start_time = params[:input_start_time],
    @event.end_time = params[:input_end_time],
    @event.location = params[:input_location], 
    @event.description = params[:input_description],
    @event.category_id = params[:event][:category_id],
    @event.save
    
  end 

  def test 

  end
   
end
