Rails.application.routes.draw do
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/me', to: "users#show"
  get '/google_places/', to: "google_places#index"
  get '/distance_to_coffee_shops/', to: "distance_to_coffee_shops#index"
  get '/coffee_shop_images', to: "coffee_shop_images#index"
  get '/favorites/:user_id/:location_id', to: "favorites#show"
  delete '/favorites/:user_id/:location_id', to: "favorites#destroy"

  resources :users
  resources :coffee_shops
  resources :locations
  resources :reviews
  resources :comments
  resources :favorites, except: [:show, :delete]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
