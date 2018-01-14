
$(document).ready(function(){

    var api = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5b22857b72f63301742fd17687a5d009';

    $.getJSON(api,function(data){
        console.log(data.coord.lon);
    });
});