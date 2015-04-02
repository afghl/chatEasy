CEApp.module('PostApp', function(PostsApp, CEApp, Backbone, Marionette, $, _){

  this.PostsLayoutView = Marionette.LayoutView.extend({
    template: JST["post/posts_layout"],
    el: '#main-content',

    regions:{
      postsRegion: '#posts-list'
    }
  })
})