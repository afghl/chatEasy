class User < ActiveRecord::Base
	validates :nickname, :presence => true
  validates :email, :presence => true, :uniqueness => true
  has_many :authentications
end
