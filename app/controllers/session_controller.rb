class SessionController < ApplicationController
	def create
		puts request.env['omniauth.auth']
		redirect_to root_path
	end
end
