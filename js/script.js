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
        var windSpeed = data.wind.speed;

        var kTemp = data.main.temp;
        fTemp = kTemp * (9 / 5) - 459.67;
        cTemp = kTemp - 273;
        var tempToggle = true;

        var city = data.name;
        console.log(city);
        console.log(api);

        $('#city').html(city);
        $('#weatherType').html(weatherType);
        $('#fTemp').html(fTemp);
        $('#fTemp').click(function() {
          if ((tempToggle === false)) {
            $('#fTemp').html(cTemp);
            tempToggle = true;
          } else {
            $('#fTemp').html(fTemp);
            tempToggle = false;
          }
        });
        $('#windSpeed').html(windSpeed);
      }).catch(function(error) {
        console.log('Error caught: ' + error);
      });
    });
  }
});
