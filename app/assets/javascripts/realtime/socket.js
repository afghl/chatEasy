window.CEApp.realtime = {
  connect : function(){
    window.CEApp.socket = io.connect("http://192.168.1.106:5001");

    window.CEApp.socket.on("rt-change", function(message){
      // publish the change on the client side, the channel == the resource
      console.log(message)
      window.CEApp.trigger(message.resource, message);
    });
  }
}