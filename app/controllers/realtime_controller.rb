class RealtimeController < ApplicationController

  def message
  	@msg = params[:message]

  	$redis.publish 'rt-change', @msg.to_json
  	render json:@msg
  end
end
