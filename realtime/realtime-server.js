var io = require('socket.io').listen(5001),
    redis = require('redis').createClient();

redis.subscribe('rt-change');
io.on('connection', function(socket){
  // redis.on('message', function(channel, message){
		// console.log('hello')
		// console.log(message)
  //   socket.emit('rt-change', JSON.parse(message));
  // });

	socket.on('message', function(message) {
		console.log(message)
		//TODO send message to everyone
		// socket.broadcast.emit('user connected');
	})
});
