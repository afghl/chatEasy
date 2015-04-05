CEApp.module('PostApp', function(PostsApp, CEApp, Backbone, Marionette, $, _){

  this.PostsLayoutView = Marionette.LayoutView.extend({
    template: JST["post/posts_layout"],
    el: '#main-content',

		ui: {
      header: '.js-draggable-header',
      dialog: '.modal-dialog'
    },
    
    regions: {
      postsRegion: '#posts-list'
    },

    onRender: function() {
    	new CEApp.helpers.DragHelper().drag(this.ui.header).to_move(this.ui.dialog)
    }
  })
})