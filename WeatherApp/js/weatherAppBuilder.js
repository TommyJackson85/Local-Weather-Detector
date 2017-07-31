$(document).ready(function() {
  var ip = "http://ip-api.com/json";
  console.log(ip);
  var apiKey = "&appid=4375088c0dfb70bc8bf2c452aede24f5";
  //gets location of User through IP address
  $.getJSON(ip, function(loc) {  
    var location = '<h3 id="locData">' + loc.city + ', ' + loc.country + '</h3>';
    console.log(location);
    $('#location').append(location);
    //using lat and lon from IP + WeatherAPI to get Weather Forecast... 
    var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + loc.lat + "&lon=" + loc.lon + "&units=metric" + apiKey;
    console.log(api);
    //Creating Button that toggles between Celsius and Fahrenheit using true or false arguments of a separated variable (tempSwap)
    $.getJSON(api, function(celsData) {
      // Sets celsius as defult and rounds it nearest number;
      var celsCalc = Math.round(celsData.main.temp);
      var celsius = celsCalc + "&#8451;";
      // calculates celsius as fahrenheit and rounds to nearesy number;
      var fahrCalc = Math.round((celsData.main.temp * 9 / 5) + 32);
      var fahrenheit = fahrCalc + '&#8457;';                
      //button default is fahrenheit so fahrenheit is set as true vvvv
      var tempSwap = true;
      $('#tempSwap').html(fahrenheit);
      $('#tempSwap').on('click', function() {
        if (tempSwap === true) {
          // once clicked, tempSwap is false and Celsius
          $('#tempSwap').html(celsius);
          tempSwap = false;
        } else {
           // clicked again, tempSwap is true and Fahrenheit. Each click changes it back
          $('#tempSwap').html(fahrenheit);
          tempSwap = true;
        }
      });      
$.getJSON(api, function(weath) {
  // Now for the description but FIRST capitalises first letter of each word so it looks nicer
  var descStr = weath.weather[0]['description'].toLowerCase().split(' ');
   for (var i = 0; i < descStr.length; i++) {   
       descStr[i] = descStr[i].charAt(0).toUpperCase() + descStr[i].substring(1);     
   };
   descStr = descStr.join(' ');

var weather =  '<h6><img src="https://openweathermap.org/img/w/' + weath.weather[0]['icon'] + '.png" alt="" style="">('+ descStr +')</h6>';

  console.log(weather);
  $("#weather").append(weather);
  //description finished and appended
  /*Now to change colors of web page in relation to certain arrays of icons (from the api)*/
 var iconIndex = {
  clear: ["01d"].indexOf(weath.weather[0].icon),
  cloud: ["01d","03d", "04d", "50d"].indexOf(weath.weather[0].icon), //includes mist
  cloudClear: ["02d"].indexOf(weath.weather[0].icon),
  rain: ["09d", "10d"].indexOf(weath.weather[0].icon),
  thunder:  ["11d"].indexOf(weath.weather[0].icon),
  snow: ["13d"].indexOf(weath.weather[0].icon),
  clearNight: ["01n"].indexOf(weath.weather[0].icon),
  cloudNight: ["03n", "04n", "50n"].indexOf(weath.weather[0].icon), //includes mist at night
  cloudClearNight: ["02n"].indexOf(weath.weather[0].icon),
  rainNight: ["09n", "10n"].indexOf(weath.weather[0].icon),
  thunderNight: ["11n"].indexOf(weath.weather[0].icon),
  snowNight: ["13n"].indexOf(weath.weather[0].icon),
}

var header = document.getElementById("header");
var body = document.getElementById("background");
var box = document.getElementById("allWeather");
var temp = document.getElementById("tempSwap");

  //var wth = "thNi"; //*Only use the wth variable to test each weather icon array (untag the test arguments below, and tag out the api based arguments -- untag and change the previous wth variable to check each array )*
  if /*(wth === "cl")*/(iconIndex.clear >= 0){
body.setAttribute("style", "color: #f1c40f; background: #3498db;");        
box.setAttribute("style", "background: #2980b9; color: #ecf0f1;");          
temp.setAttribute("style", "background: #c0392b;");    
      }
  else if /*(wth === "cld")*/(iconIndex.cloud >= 0) { 
body.setAttribute("style", "color: #3498db; background: #ecf0f1;"); 
header.setAttribute("style", "color: #f1c40f;");         
box.setAttribute("style", "background: #2980b9;");          
temp.setAttribute("style", "background: #3498db;");
      } 
  else if /*(wth === "cldcl")*/(iconIndex.cloudClear >= 0){    
body.setAttribute("style", "color: #c0392b; background: #2980b9;");
header.setAttribute("style", "color: #f1c40f;");            
box.setAttribute("style", "background: #ecf0f1;");          
temp.setAttribute("style", "background: #2980b9;");     
      } 
  else if /*(wth === "rn")*/(iconIndex.rain >= 0){   
body.setAttribute("style", "color: #34495e; background: #2980b9;");
header.setAttribute("style", "color: #34495e;");
box.setAttribute("style", "background: #95a5a6;");
temp.setAttribute("style", "background: #34495e;");   
      }    
  else if /*(wth === "thn")*/(iconIndex.thunder >= 0) {
body.setAttribute("style", "color: #c0392b; background: #2980b9;");
header.setAttribute("style", "color: #f1c40f;");            
box.setAttribute("style", "background: #f1c40f;");          
temp.setAttribute("style", "background: #c0392b;");    
      } 
  else if /*(wth === "snww")*/(iconIndex.snow >= 0){  
body.setAttribute("style", "color: #ecf0f1; background: #2980b9;");
header.setAttribute("style", "color: #34495e;");            
box.setAttribute("style", "background: #a5f2f3;");          
temp.setAttribute("style", "background: #34495e;");  
      } 
  else if /*(wth === "clNi")*/(iconIndex.clearNight >= 0){
body.setAttribute("style", "color: #f1c40f; background: #2c3e50;");
header.setAttribute("style", "color: #e74c3c;");            
box.setAttribute("style", "background: #34495e; color: #f1c40f;");          
temp.setAttribute("style", "background: #2c3e50;");        
      } 
  else if /*(wth === "cldNi")*/(iconIndex.cloudNight >= 0){            
body.setAttribute("style", "color: #ecf0f1; background: #7f8c8d;");
header.setAttribute("style", "color: #e74c3c;");            
box.setAttribute("style", "background: #34495e; color: #f1c40f;");          
temp.setAttribute("style", "background: #2c3e50;");
      } 
  else if /*(wth === "cldclNi")*/(iconIndex.cloudClearNight >= 0) {          
body.setAttribute("style", "color: #f1c40f; background: #2c3e50;");
header.setAttribute("style", "color: #e74c3c;");            
box.setAttribute("style", "background: #95a5a6; color: #2c3e50;");          
temp.setAttribute("style", "background: #2c3e50;");

      } 
  else if /*(wth === "rnNi")*/(iconIndex.rainNight >= 0) {
body.setAttribute("style", "color: #3498db; background: #2c3e50;");
header.setAttribute("style", "color: #f1c40f;");            
box.setAttribute("style", "background: #95a5a6; color: #2980b9;");          
temp.setAttribute("style", "background: #2980b9;");
      } 
  else if /*(wth === "thNi")*/ (iconIndex.thunderNight >= 0) {
body.setAttribute("style", "color: #f1c40f; background: #2c3e50;");
header.setAttribute("style", "color: #e74c3c;");            
box.setAttribute("style", "background: #f1c40f; color: #c0392b;");          
temp.setAttribute("style", "background: #c0392b;");
      } 
  else if/*(wth === "snNi")*/ (iconIndex.snowNight >= 0) {
body.setAttribute("style", "color: #f1c40f; background: #2c3e50;");
header.setAttribute("style", "color: #a5f2f3;");            
box.setAttribute("style", "background: #a5f2f3; color: #34495e;");          
temp.setAttribute("style", "background: #f1c40f;");
      }
}); }); }); });