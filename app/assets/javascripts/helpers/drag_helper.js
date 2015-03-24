window.helpers = window.helpers || {};

(function (window) {
	var DragHelper = function() {
		return this
	}

	DragHelper.prototype = {
		constructor:DragHelper,

		//drag which element
		drag: function (dragEleSelector) {
			this.$drag = $(dragEleSelector).css("cursor","move")
			this.$drag.mousedown(_mousedownCallback(this))
			this.$drag.mouseup(_mouseupCallback(this))
			return this
		},

		to_move: function (targetEleSelector) {
			this.$target = $(targetEleSelector)
			this.$target.mousemove(_mousemoveCallback(this))
		}
	}

	window.helpers.DragHelper = DragHelper

	var _mousedownCallback = function (_this) {
		return function(e) {
			_this.dragFlag = true

			var offset = $(this).offset()
			var x = e.pageX - offset.left
			var y = e.pageY - offset.top
			// _this.originX = x
			// _this.originY = y
			_this.originX = e.pageX
			_this.originY = e.pageY
		}
	}

	var _mouseupCallback = function (_this) {
		return function() {
			_this.dragFlag = false
		}
	}

	var _mousemoveCallback = function (_this) {
		return function(e) {
			if (!_this.dragFlag)
				return
			var _x = e.pageX - _this.originX
			var _y = e.pageY - _this.originY
			_this.$target.animate({left : _x + "px", top : _y + "px"}, 0);
		}
	}
})(window)



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
