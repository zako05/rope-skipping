$(document).ready(function init_map(){
	
	var locations = [
		["<b>Crazy Jump (SOS Poligraficka)</b><br/>Racianska 190<br/>831 06 Bratislava", 48.2011012, 17.14949439999998, 1],
		["<b>Crazy Jump (Skola Montessori)</b><br/>Borinska 8<br/>841 03 Bratislava", 48.190443, 17.050011, 2]
					];
	
	var myOptions = {
						zoom:12,
						center:new google.maps.LatLng(48.20, 17.13),
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};

	var map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);

	var infowindow = new google.maps.InfoWindow();

	var marker,	i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]), map: map
		});

		google.maps.event.addListener(marker, "click", (function(marker, i) {
			return function() {
				infowindow.setContent(locations[i][0]);
				//new google.maps.InfoWindow({content: locations[i][0] });
				infowindow.open(map, marker);
			}
		})(marker, i));
	};
});
