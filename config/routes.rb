Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :categories, only: [:index, :show]
    resources :products, only: [:index, :create, :show, :update, :destroy]
    resources :shopping_cart_items, only: [:index, :show, :create, :destroy, :update]
  end

  root "static_pages#root"
end
