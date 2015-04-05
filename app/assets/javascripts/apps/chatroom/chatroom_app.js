CEApp.module('ChatroomApp', function(ChatroomApp, CEApp, Backbone, Marionette, $, _){

  this.ChatroomAppRouter = Marionette.AppRouter.extend({
    appRoutes: {
      'chatroom': 'initChatroom'
    }
  })

  this.ChatroomAppController = Marionette.Controller.extend({
    initChatroom: function () {
      var msgs = [{user:'user_a',message:'user_a said ...'}, {user:'user_b',message:'user_b said ...'}]
      var collection = new Backbone.Collection(msgs)
      var collectionView = new ChatroomApp.MessagesCollectionView({collection: collection})
      var layoutView = new ChatroomApp.ChatroomLayoutView()
      layoutView.render()
      layoutView.getRegion('messageListRegions').show(collectionView)
    }
  })

  this.on('start', function() {
    var controller = new ChatroomApp.ChatroomAppController()
    new this.ChatroomAppRouter({controller: controller})
  })
})