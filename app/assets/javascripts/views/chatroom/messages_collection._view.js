CEApp.module('ChatroomApp', function(ChatroomApp, CEApp, Backbone, Marionette, $, _){

  this.MessagesCollectionView = Marionette.CollectionView.extend({
    template: JST["chatroom/messages_collection"],
    childView: this.MessageItemView,
    tagName: 'ul',

    initialize: function() {
    }
  })
})