CEApp.helpers = CEApp.helpers || {};

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
			// this.$drag.mouseup(_mouseupCallback(this))
			$(window).mouseup(_mouseupCallback(this))
			return this
		},

		to_move: function (targetEleSelector) {
			this.$target = $(targetEleSelector)
			this.$target.mousemove(_mousemoveCallback(this))
		}
	}

	CEApp.helpers.DragHelper = DragHelper

	var _mousedownCallback = function (_this) {
		return function(e) {
			_this.dragFlag = true
			var offset = $(this).offset()
			var x = e.pageX - offset.left
			var y = e.pageY - offset.top
			// _this.originX = x
			// _this.originY = y
			_this.originX = x
			_this.originY = y
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
			_this.$target.offset({top: _y, left: _x})
		}
	}
})(window)