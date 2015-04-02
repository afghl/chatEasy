CEApp.module('PostApp', function(PostsApp, CEApp, Backbone, Marionette, $, _){

	this.PostsCollectionView = Marionette.CompositeView.extend({
		template: JST['post/posts_collection'],
		childView: this.PostItemView,
		childViewContainer: '#post-list',
		tagName: 'ul',


	})
})