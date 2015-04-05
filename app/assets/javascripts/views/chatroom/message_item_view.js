CEApp.module('ChatroomApp', function(ChatroomApp, CEApp, Backbone, Marionette, $, _){

  this.MessageItemView = Marionette.ItemView.extend({
    template: JST["chatroom/message_item"],
    tagName: 'li',

    initialize: function() {
    },

    onRender: function() {
    	this.$el.addClass('list-group-item')
    }
  })
})