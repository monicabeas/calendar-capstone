Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users 

  resources :tasks 

  resources :events 
  
  # Login 
  get "/login" => "sessions#new"
  post "/login" => "sessions#create"

  #Logout 
  get "/logout" => "sessions#destroy"

end
