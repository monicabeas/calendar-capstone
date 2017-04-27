class TasksController < ApplicationController
  before_action :authenticate_user!

  def index 
    @tasks = current_user.tasks
  end 


  def new 

  end 

  def create 
    task = Task.create(
      title: params[:input_title],
      due_date: params[:input_due_date],
      notes: params[:input_notes],
      task_type: params[:input_type],
      user_id: current_user.id

      )
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

end
