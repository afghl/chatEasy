Rails.application.config.middleware.use OmniAuth::Builder do
	provider :github, '31d3c14a172082fc379a',
    '92bc3648e9ab7ea4c3683624597f101044999bd6'
end