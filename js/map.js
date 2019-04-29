//map
function initMap() {
	var pos = {lat:50.387523, lng:30.472232};
	var opt = {
		center: pos,
		zoom: 12,
	}

	var map = new google.maps.Map(document.getElementById('map'), opt);

	var marker = new google.maps.Marker({
		position: pos,
		map: map,
		title: 'Grand Hotel'
	})
}