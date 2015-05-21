jQuery(document).ready(function ($) {
	var myDiv = $('.max-length');
	myDiv.text(myDiv.text().substring(0,300))
});