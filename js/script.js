$(document).ready(function() {
  var long;
  var lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      $('#data').html('latitude: ' + lat + '<br>longitude: ' + long);

      var api =
        'http://api.openweathermap.org/data/2.5/weather?lat=' +
        lat +
        '&lon=' +
        long +
        '&appid=5b22857b72f63301742fd17687a5d009';

      $.getJSON(api, function(data) {
        console.log(data.coord.lon);
        var city = data.name;
        console.log(city);
        console.log(api);
      }).catch(function(error) {
        console.log('Error caught: ' + error);
      });
    });
  }
});
