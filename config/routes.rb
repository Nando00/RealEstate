Rails.application.routes.draw do
  get "/dashboard" => 'dashboard#index', as: :dashboard
  get "/profile/:id" => 'dashboard#profile', as: :profile
  
  post "/agent/contact" => "properties#email_agent" , as: :email_agent

  resources :properties
  devise_for :accounts
  root 'public#main'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
