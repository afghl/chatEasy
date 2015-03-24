if (!window.helpers)
	window.helpers = {};

helpers.dragHelper = function() {
	
	//constructor
	this.initialize = function (selectorText) {
		this.$target = $(selectorText).css("cursor","move")
		this.$target.mousedown(this.mousedownCallback)
		this.$target.mousemove(this.mousemoveCallback)
	},

	this.mousedownCallback = function (e) {
		//this is the draggable element
		var offset = $(this).offset()
		var x = e.pageX - offset.left
		var y = e.pageY - offset.top
	},

	this.mousemoveCallback = function (e) {
		if(!this.style.left || !this.style.top){
			this.style.left = e.pageX + 'px'
			this.style.top = e.pageY + 'px'
		}
		var _x = e.pageX - parseInt(this.style.left)
		var _y = e.pageY - parseInt(this.style.top)
		this.style.left = _x + 'px'
		this.style.top = _y + 'px'
	}
}