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

$(function () {
    new helpers.dragHelper('hi')
    //drag .modal-header to move .modal-dialog
    var isDragged = false
    var diffX = 0
    var diffY = 0

    var down = function (e) {
        if (e.target.className == 'modal-header')
            isDragged = true
        $(e.target).css("cursor","move")
        var offset = $(this).offset()
    }

    var move = function (e) {
        if (!isDragged) return
        movingObj = $('.modal-dialog')
        var _x = e.pageX - parseInt(movingObj[0].style.left)
        var _y = e.pageY - parseInt(movingObj[0].style.top)
        console.log(movingObj[0].style.top)
        movingObj[0].style.left = _x + 'px'
        movingObj[0].style.top = _y + 'px'
    }
    var up = function (e) {
        isDragged = false
    }
    document.addEventListener('mousedown', down);
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
})
