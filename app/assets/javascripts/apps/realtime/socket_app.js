CEApp.module('RealtimeApp', function(RealtimeApp, CEApp, Backbone, Marionette, $, _){
	
  this.on('start', function() {
		this.socket = io.connect(gon.socketUrl)
		console.log(this.socket)
		this.addSocketHandles()
		this.addEventsHandles()
  })

  this.addSocketHandles = function() {
  	this.socket.on('client:receive-message', this.receiveMessage)
  }

  this.addEventsHandles = function() {
  	CEApp.events.on('send-message', this.sendMessage)
  }

  this.sendMessage = function(message) {
  	var socket = CEApp.RealtimeApp.socket
  	socket.emit('client:send-message', message)
  }

  this.receiveMessage = function(message) {
  	console.log(message)
  }
})