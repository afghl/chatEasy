this.CEApp = (function(Backbone, Marionette) {
	var App = new Marionette.Application()

	App.on('start', function() {
    Backbone.history.start()
	})

  App.addInitializer(function() {
  	this.events = _.extend({}, Backbone.Events)
  })

	return App
})(Backbone, Marionette)