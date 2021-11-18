Rails.application.routes.draw do
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/me', to: "users#show"

  resources :users, except: :show
  resources :coffee_shops
  resources :locations
  resources :reviews
  resources :comments
  resources :favorites
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end