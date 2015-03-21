CEApp.module('Collections', function(PostsApp, BlogApp, Backbone, Marionette, $, _){

	this.Post = Backbone.Collection.extend({

		url: '/api/posts',

		initialize: function (options) {

		}
	})
})