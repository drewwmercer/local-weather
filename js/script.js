$(document).ready(function() {
  var long;
  var lat;
  var fTemp;
  var cTemp;

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

        var weatherType = data.weather[0].description;
        var kTemp = data.main.temp;
        fTemp = kTemp * (9 / 5) - 459.67;
        cTemp = kTemp - 273;

        var city = data.name;
        console.log(city);
        console.log(api);

        $('#city').html(city);
      }).catch(function(error) {
        console.log('Error caught: ' + error);
      });
    });
  }
});
