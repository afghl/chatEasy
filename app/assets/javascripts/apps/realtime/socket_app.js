CEApp.module('RealtimeApp', function(PostsApp, CEApp, Backbone, Marionette, $, _){
  // this.PostsAppController = Marionette.Controller.extend({
  //   showAllPosts: function () {
  //     //fetch collection
  //     var collection = new CEApp.Collections.Post()
  //     collection.fetch()
  //     var collectionView = new PostsApp.PostsCollectionView({collection: collection})
  //     var layoutView = new PostsApp.PostsLayoutView()

  //     layoutView.render()
  //     layoutView.getRegion('postsRegion').show(collectionView)
  //   }
  // })

	//RealtimeApp is like a bridge between backbone and socket.io

	this.on('start', function() {
		this.socket = io.connect(gon.socketUrl)
		console.log(this.socket)
		this.addSocketHandles()
		this.addEventsHandles()
  })

  this.addSocketHandles = function() {
  	this.socket.on('receive-message', this.receiveMessage)
  }

  this.addEventsHandles = function() {
  	CEApp.events.on('send-message', this.sendMessage)
  }

  this.sendMessage = function(message) {
  	var socket = CEApp.RealtimeApp.socket
  	socket.emit('message', message)
  }

  this.receiveMessage = function(message) {
  	console.log(message)
  }
})