class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  include ActionController::Rendering        # enables rendering
  include ActionController::MimeResponds     # enables serving different content types like :xml or :json
  include AbstractController::Callbacks      # callbacks for your authentication logic
end
