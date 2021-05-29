var timeout = 1000; // 1000 ms = 1 sec
$(document).ready(function () {
	// preload images
	$("#image_list a").each(function () {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});

	// set up event handlers for links    
	$("#image_list a").click(function (evt) {
		var imageURL = $(this).attr("href");
		var caption = $(this).attr("title");
		makeFade(imageURL, caption, makeFade);
		evt.preventDefault();
	}); // end click

	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready

// This function helps us to make fadeout and fadein to image and caption. 
// Fade image and caption if not animated
function makeFade(imageURL, caption) {
	$('#image').stop().not(':animated').fadeOut(timeout, function () {
		$("#image").attr("src", imageURL);
	}).fadeIn(timeout);

	$('#caption').stop().not(':animated').fadeOut(timeout, function () {
		$("#caption").text(caption);
	}).fadeIn(timeout);

}