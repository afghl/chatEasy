this.CEApp = (function(Backbone, Marionette) {
	var App = new Marionette.Application()

	App.on('start', function() {
		console.log('helloworld')
	})

  App.addInitializer(function() {
  })

	return App
})(Backbone, Marionette)