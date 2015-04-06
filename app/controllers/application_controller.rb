class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
	before_action :set_socket_url

  include ActionController::Rendering        # enables rendering
  include ActionController::MimeResponds     # enables serving different content types like :xml or :json
  include AbstractController::Callbacks      # callbacks for your authentication logic

  def set_socket_url
  	gon.push({socketUrl: socket_url})
  end

  private
  def socket_url
  	#TODO in production
  	Rails.env.production? ? "http://112.74.100.113:5001/" : "http://192.168.1.106:5001"
  end

end
