CEApp.module('PostApp', function(PostsApp, BlogApp, Backbone, Marionette, $, _){

	this.PostItemView = Marionette.ItemView.extend({
		template: JST['post/post_item'],
		tagName: 'li',


	})
})