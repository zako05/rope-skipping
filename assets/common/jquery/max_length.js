var item = ['.max-length-training','.max-length-notice','.max-length-ropeskipping'];

//jQuery(document).ready(function($) {
jQuery.each(item, function(index,value) {

	var myDiv = $(value);
	console.log(myDiv);
	
	myDiv.text(myDiv.text().substring(0,300))
});