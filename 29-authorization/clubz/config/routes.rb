Rails.application.routes.draw do

  resources :users, only: [:new, :create]
  resources :clubs
  resources :sessions, only: [:new, :create, :destroy]  

  root 'clubs#index'

end
