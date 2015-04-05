var io = require('socket.io').listen(5001),
    redis = require('redis').createClient();

redis.subscribe('rt-change');
io.on('connection', function(socket){
  // redis.on('message', function(channel, message){
		// console.log('hello')
		// console.log(message)
  //   socket.emit('rt-change', JSON.parse(message));
  // });

	socket.on('client:send-message', function(message) {
		//TODO send message to everyone (include the one send message)
		io.emit('client:receive-message', message);
	})
});
