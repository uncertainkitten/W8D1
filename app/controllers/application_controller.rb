class ApplicationController < ActionController::Base
  helper_method :logged_in?, :current_user, :require_login, :require_logout

  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    @current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_login
    if !logged_in?
      redirect_to root
    end
  end

  def require_logout
    if logged_in?
      redirect to root
    end
  end
end
