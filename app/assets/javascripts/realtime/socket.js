window.CEApp.realtime = {
  connect : function(){
    window.CEApp.socket = io.connect("http://0.0.0.0:5001");

    window.CEApp.socket.on("rt-change", function(message){
      // publish the change on the client side, the channel == the resource
      window.CEApp.trigger(message.resource, message);
    });
  }
}