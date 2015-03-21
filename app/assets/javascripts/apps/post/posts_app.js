CEApp.module('PostApp', function(PostsApp, BlogApp, Backbone, Marionette, $, _){

  this.PostsAppRouter = Marionette.AppRouter.extend({
    appRoutes: {
      '': 'showAllPosts'
    }
  })

  this.PostsAppController = Marionette.Controller.extend({
    showAllPosts: function () {
      //fetch collection
      var collection = new CEApp.Collections.Post()
      collection.fetch()
      var collectionView = new PostsApp.PostsCollectionView({collection: collection})
      var layoutView = new PostsApp.PostsLayoutView()

      layoutView.render()
      layoutView.getRegion('postsRegion').show(collectionView)
    }
  })

  this.on('start', function() {
    var controller = new PostsApp.PostsAppController()
    new this.PostsAppRouter({controller: controller})

    Backbone.history.start()
  })
})