CEApp.module('Collections', function(PostsApp, CEApp, Backbone, Marionette, $, _){

	this.Post = Backbone.Collection.extend({

		url: '/api/posts',

		initialize: function (options) {
			this.on('add', function(post) {
			})
		},
	})
})