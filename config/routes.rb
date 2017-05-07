Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api do 
    namespace :v1 do 
      get "/events" => "events#index"
    end 
  end 


  #test page 
  get "/test" => "events#test"

  # Sign up 

  get "/signup" => "users#new"
  post "/signup" => "users#create"

  resources :tasks 

  resources :events 
  
  # Login 
  get "/login" => "sessions#new"
  post "/login" => "sessions#create"

  #Logout 
  get "/logout" => "sessions#destroy"



end
