Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]

    resources :users do 
      resources :profiles, only: [:index, :create]
    end

    resources :profiles, only: [:show, :update, :destroy]

    resources :videos, only: [:index, :show]

    resources :genres, only: [:index, :show]

    # might have to refactor later or talk about how to solve this problem differently using backend
    # going to solve this using frontend tricks for now

    resources :lists, only: [:index, :show, :create, :destroy]

    resource :session, only: [:create, :destroy]
  end
end
