class User < ActiveRecord::Base
  validates :nickname, :presence => true
  validates :email, :presence => true, :uniqueness => true
  has_many :authentication

  accepts_nested_attributes_for :authentication

  class << self
    def from_auth(auth)
      Authentication.find_by_provider_and_ui(auth[:provider], auth[:uid]).try(:user) ||
        create!(
          :nickname => auth[:info][:nickname],
          :email => auth[:info][:email],
          :authentication_attributes => [
            Authentication.new(:provider => auth[:provider],
                               :ui => auth[:uid]
                              ).attributes
          ]
        )
    end
  end
end
