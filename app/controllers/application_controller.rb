class ApplicationController < ActionController::Base
    #take this out for user authentication
    skip_before_action :verify_authenticity_token
    
    helper_method :current_user, :logged_in?

    def login!(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def logout!
        current_user.reset_session_token!
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def require_logged_out
        #prevent logged out users from seeing certain pages
        redirect_to user_url(current_user) if logged_in?
    end

    def require_logged_in
        #prevent logged in users from seeing certain pages
        redirect_to new_session_url unless logged_in?
    end

end
