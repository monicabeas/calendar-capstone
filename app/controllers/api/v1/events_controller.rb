class Api::V1::EventsController < ApplicationController
  def index 
    @events = Event.all
  end 
  def new 

  end 

  def create 
     event = Event.create(
      title: params[:title],
      start_time: params[:start],
      end_time: params[:end],
      allDay: params[:allDay],
      # location: params[:input_location], 
      # description: params[:input_description],
      # category_id: params[:event][:category_id],
      user_id: 9
      )
  end 

end
