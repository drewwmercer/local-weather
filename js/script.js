$(document).ready(function() {
  var long;
  var lat;
  var fTemp;
  var cTemp;

  $.getJSON('http://ip-api.com/json', function(data2) {
    lat = data2.lat;
    long = data2.lon;

    var api =
      'http://api.openweathermap.org/data/2.5/weather?lat=' +
      lat +
      '&lon=' +
      long +
      '&appid=5b22857b72f63301742fd17687a5d009';

    $.getJSON(api, function(data) {
      console.log(data.coord.lon);

      var weatherType = data.weather[0].description;
      var windSpeed = (data.wind.speed * 2.237).toFixed(1);

      var kTemp = data.main.temp;
      fTemp = (kTemp * (9 / 5) - 459.67).toFixed(0);
      cTemp = (kTemp - 273).toFixed(1);
      var tempToggle = true;

      var city = data.name;
      console.log(city);
      console.log(api);

      $('#city').html(city);
      $('#weatherType').html(weatherType);
      $('#fTemp').html(fTemp + '&#8457;');
      $('#fTemp').click(function() {
        if (tempToggle === false) {
          $('#fTemp').html(fTemp + '&#8457;');
          tempToggle = true;
        } else {
          $('#fTemp').html(cTemp + '&#8451;');
          tempToggle = false;
        }
      });
      $('#windSpeed').html(windSpeed + ' mph');

      if (fTemp > 80) {
        $('body').css('background-image', 'url()');
      } else if (fTemp > 70) {
      }
    }).catch(function(error) {
      console.log('Error caught: ' + error);
    });
  });
});
