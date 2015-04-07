class SessionController < ApplicationController

	def create
		debugger
		puts request.env['omniauth.auth'][:info]
		user = User.from_auth(request.env['omniauth.auth'])

		session[:user_id] = user.id
		render json: user
	end
end
