class Api::V1::TasksController < ApplicationController

  def index 
    @tasks = Task.all
  end 


  def new 

  end 

  def create 
    @task = Task.create(
      title: params[:text],
      completed: params[:checked],
      user_id: current_user.id
      )
    render 'show.json.jbuilder'
  end 

  def edit 
    @task = Task.find_by(id: params[:id])
  end 

  def update 
    @task = Task.find_by(id: params[:id])
    @task.title = params[:input_title]
    @task.due_date = params[:input_due_date]
    @task.notes = params[:input_notes]
    @task.task_type = params[:input_type]
    @task.save 
  end 

  def destroy 
    task_id = params[:id]
    @task = Task.find_by(id: task_id)
    @task.destroy
    
    render 'show.json.jbuilder'
  end 

end
