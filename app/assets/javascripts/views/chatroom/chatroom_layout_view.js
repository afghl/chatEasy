CEApp.module('ChatroomApp', function(ChatroomApp, CEApp, Backbone, Marionette, $, _){

  this.ChatroomLayoutView = Marionette.LayoutView.extend({
    template: JST["chatroom/chatroom_layout"],
    el: '#chat-room',

    ui: {
      header: '.js-draggable-header',
      dialog: '.modal-dialog'
    },

    regions:{
      messageListRegions : '#message-list'
    },

    onRender: function() {
      new helpers.DragHelper().drag(this.ui.header).to_move(this.ui.dialog)
    }
  })
})