class Post < ActiveRecord::Base
	has_many :images

  mount_uploader :icon, ImageUploader
  
end
