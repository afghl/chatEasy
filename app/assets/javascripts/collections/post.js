CEApp.module('Collections', function(PostsApp, CEApp, Backbone, Marionette, $, _){

	this.Post = Backbone.Collection.extend({

		url: '/api/posts',

		initialize: function (options) {
			this.on('add', function(post) {
			})
			this.privateFunction()
		},

		privateFunction: function() {
			CEApp.events.on('new-post', (function(_this) {
				return function(post) {
					_this.trigger('add', post)
				}
			})(this))
		}

	})
})