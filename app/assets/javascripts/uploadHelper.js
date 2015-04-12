// (function() {
// 	var UploadHelper = 	
// })()


/*----------------------------------------------*/
$(function() {
	// $('#post_icon').change(function() {
	// 	var file = this.files[0];
	// 	var fr = new FileReader();
	// 	fr.readAsDataURL(file);
	// 	$(fr).load(function() {
	// 		var $imageEle = $('<img src="'+ this.result +'" alt="" />');
	// 		$('#post_likes_input').append($imageEle);
	// 	})
	// })
	var dragDrop = $('#file-drag-area')
	var fileButton = $('#post_icon')
	var allFiles = []
	var onDragOver = function(e) {
		e.stopPropagation();
		e.preventDefault();
		$(this).html('dragging!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
	}

	var onDragLeave = function(e) {
		e.stopPropagation();
		e.preventDefault();
		$(this).html('darg again to here')
	}

	var funGetFiles = function(e) {
		e.stopPropagation();
		e.preventDefault();
		$(this).removeClass('.dragging')
		var files = e.target.files || e.dataTransfer.files;
		allFiles = allFiles.concat(filterFiles(files));
		funDealFiles();
		console.log(allFiles)
		return this;
	}

	var filterFiles = function(files) {
		var arrFiles = [];
		for (var i = 0, file; file = files[i]; i++) {
			if (file.type.indexOf("image") == 0) 
				arrFiles.push(file);
		}
		return arrFiles;
	}

	var funDealFiles = function() {
		for (var i = 0, file; file = allFiles[i]; i++) {
			file.index = i;
		}
		fileButton.get(0).files = allFiles;
		console.log(fileButton)
		onSelect(allFiles);
		return this;
	}

	var onSelect = function(allFiles) {
		var showArea = $('.upload-show');
		var html = '', i = 0;
		var appendImage = function () {
			var file = allFiles[i];
			if(file) {
				var fr = new FileReader();
				fr.onload = function(e) {
					html += '<img src="' + e.target.result + '"; style = "max-height: 100px;">';
					i++;
					appendImage();
				};
				fr.readAsDataURL(file)
			} else {
				showArea.html(html)
			}
		};
		appendImage();
	}
	
	dragDrop.get(0).addEventListener('dragover', onDragOver, false)
	dragDrop.get(0).addEventListener('dragleave', onDragLeave, false)
	dragDrop.get(0).addEventListener('drop', funGetFiles, false)

	fileButton.change(funGetFiles)
})