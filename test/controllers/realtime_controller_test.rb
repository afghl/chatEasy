require 'test_helper'

class RealtimeControllerTest < ActionController::TestCase
  test "should get message" do
    get :message
    assert_response :success
  end

end
