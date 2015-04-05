CEApp.module('ChatroomApp', function(ChatroomApp, CEApp, Backbone, Marionette, $, _){

  this.ChatroomLayoutView = Marionette.LayoutView.extend({
    template: JST["chatroom/chatroom_layout"],
    el: '#chat-room',

    ui: {
      header: '.js-draggable-header',
      dialog: '.modal-dialog',
      send: '#js-send',
      message: '#message-input'
    },

    events: {
      'click #js-send': 'sendMessage'
    },

    regions: {
      messageListRegions : '#message-list'
    },

    onRender: function() {
      new helpers.DragHelper().drag(this.ui.header).to_move(this.ui.dialog)
    },

    sendMessage: function() {
      var message = $(this.ui.message).val()
      //TODO
      $(this.ui.message).val('')
    }
  })
})