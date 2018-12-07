class SleepSessionsController < ApplicationController


  def index
    @sleep_sessions = SleepSession.all
    render :index
  end

  def new
    @sleep_session = SleepSession.new
    render :new
  end

  def create
    new_sleep = SleepSession.new()
    new_sleep.quality = params[:sleep_session][:quality]
    new_sleep.quantity = params[:sleep_session][:quantity]
    new_sleep.description = params[:sleep_session][:description]
    new_sleep.save
    redirect_to sleep_sessions_path # '/sleep_sessions'
  end

end
