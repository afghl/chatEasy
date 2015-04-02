// var server = require('http').createServer();
// var	io = require('socket.io')(server);
// // var redis = require('redis').createClient('6380', '127.0.0.1');
// io.on('connection', function(socket) {
// 	console.log('helloworld');
// })
// server.listen(3001);

// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.send("<h1>Hello world</h1><script src='/socket.io/socket.io.js'></script>
// <script>
//   var socket = io();
// </script>");
// });

// io.on('connection', function(socket){
//   console.log('a user connected');
// });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });



var io = require('socket.io').listen(5001),
    redis = require('redis').createClient();
// test if nodejs and redis connected 
redis.on('connect', function() {
	console.log('connected!')
})

redis.subscribe('rt-change');
io.on('connection', function(socket){
	console.log('one user connected...');
	console.log(socket.handshake);
  redis.on('message', function(channel, message){
		console.log('hello')
    socket.emit('rt-change', JSON.parse(message));
  });
});
