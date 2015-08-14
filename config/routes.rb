Rails.application.routes.draw do

  root to: 'static_pages#index'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  namespace :api, defaults: {format: 'json'} do
    resources :projects, except: [:new, :edit]
    resources :rewards, only: [:create, :show, :index]
    resources :categories, only: [:index]
    resources :users, only: [:index ]
  end

end
