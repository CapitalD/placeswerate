function get_place_info() {
  var gContainer = document.getElementById('google_attr');
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: map_lat, lng: map_lng},
    zoom: 17
  });

  //var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  var infowindow = new google.maps.InfoWindow();

  service.getDetails({
    placeId: google_placeid
  }, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
      map.setCenter(place.geometry.location);
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
      display_place_info(place);
    }
  });
}

function display_place_info(place) {
  var formatted_address = place.adr_address.split(", ").join("<br>");
  $("#place_address").html(formatted_address);
  $("#place_phone").html(place.international_phone_number);
  $("#place_website").html(place.website);
  $("#place_website").attr("href", place.website);
  if (place.opening_hours) {
    $("#place_hours").html(place.opening_hours.weekday_text.join("<br>"));
  } else {
    $("#place_hours").prev().hide();
  }

}
