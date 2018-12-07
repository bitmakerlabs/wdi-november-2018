Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get 'sleep_sessions' => 'sleep_sessions#index'
  resources :sleep_sessions
end
