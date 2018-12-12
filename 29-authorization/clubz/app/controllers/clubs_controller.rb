class ClubsController < ApplicationController
  before_action :require_login, except: [:index]
  before_action :require_ownership, only: [:edit, :update, :destroy]

  def index
    @clubs = Club.all
  end

  def show
    @club = Club.find(params[:id])
    render :show
  end

  def new
    @club = Club.new
  end

  def create
    @club = Club.new(
      name: params[:club][:name],
      description: params[:club][:description],
      user: current_user
    )

    if @club.save
      redirect_to root_path
    else
      flash.now[:alert] = @club.errors.full_messages
      render :new
    end
  end

  def edit
    @club = Club.find(params[:id])
  end

  def update
    @club = Club.find(params[:id])

    if @club && @club.update(name: params[:club][:name], description: params[:club][:description], user: current_user)
      redirect_to root_path
    else
      flash.now[:alert] = @club.errors.full_messages
      render :edit
    end
  end

  def destroy
    @club = Club.find(params[:id])
    @club.destroy
    redirect_to root_path
  end

  def require_login
    unless session[:user_id]
      flash[:alert] = "You must be logged in"
      redirect_to new_session_path
    end
  end

  def require_ownership
    @club = Club.find(params[:id])
    # unless session[:user_id] == @club.user_id
    unless current_user == @club.user
      flash[:alert] = "You are not the owner of this club"
      redirect_to root_path
    end
  end

end
