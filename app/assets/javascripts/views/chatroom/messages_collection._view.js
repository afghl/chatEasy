CEApp.module('ChatroomApp', function(ChatroomApp, CEApp, Backbone, Marionette, $, _){

  this.MessagesCollectionView = Marionette.CollectionView.extend({
    template: JST["chatroom/messages_collection"],
    childView: this.MessageItemView,
    tagName: 'ul',

    initialize: function() {
    	CEApp.events.on('receive-message', this.addMessage())
    },

    addMessage: function() {
      var self = this
      return function(message) {
        var message = new Backbone.Model({message: message})
        self.collection.push(message)
      }
    }
  })
})