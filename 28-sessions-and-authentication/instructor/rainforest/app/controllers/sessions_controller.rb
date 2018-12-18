class SessionsController < ApplicationController
  def new
  end

  def create
    submitted_email = params[:session][:email]
    submitted_password = params[:session][:password]

    u = User.find_by(email: submitted_email)

    if u && u.authenticate(submitted_password)

      # Put on the wristband
      session[:user_id] = u.id

      # flash: "Access Granted!"
      redirect_to root_url
    else
      # flash: 'Email or Password invalid!'
      render :new
    end
  end

  def destroy
    # Cut the wristband
    session[:user_id] = nil

    # flash: 'Successful logout'
    redirect_to root_url
  end
end

# Magic hashes:
# params
# flash
# session
