$(document).ready(function init_map(){
	var myOptions = {zoom:16,center:new google.maps.LatLng(48.2011012,17.14949439999998),mapTypeId: google.maps.MapTypeId.HYBRID};
	map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
	marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(48.2011012, 17.14949439999998)});
	infowindow = new google.maps.InfoWindow({content:"<b>Crazy Jump</b><br/>Racianska 190<br/>85101 Bratislava" });
	google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);
}); 
google.maps.event.addDomListener(window, 'load', init_map);