function viewimage(e) {
	// body...
	if (e.files[0]) {
		var reader = new FileReader();

		reader.onload = function(e) {
			var showimage = document.querySelector('#showimage');
			showimage.setAttribute('src', e.target.result);
		};
		reader.readAsDataURL(e.files[0]);
	}
}
