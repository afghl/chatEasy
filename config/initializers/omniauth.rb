Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, '9dbdd25c6cfc1140fdb1', '3d171546f8d9a8d59758984e80a0d2b60364a742'
end