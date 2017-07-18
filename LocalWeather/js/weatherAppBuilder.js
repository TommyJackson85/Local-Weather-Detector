$(document).ready(function() {

  var ip = "http://ip-api.com/json";
  console.log(ip);
  var lat;
  var long;
  var apiKey = "&appid=4375088c0dfb70bc8bf2c452aede24f5";
  var city = '<h3 id="locData">%data%, ';
  var country = '%data%</h3>';
  var celsius = "%data% &#8451;";
  var fahrenheit = "%data% &#8457;";
  var icon = '<h6><img src="https://openweathermap.org/img/w/%data%.png" alt="" style="">';
  var mainDesc = '(%data%)</h6>';
  
  //gets location of User through IP address
  $.getJSON(ip, function(loc) {
    lat = loc.lat;
    console.log(lat)
    long = loc.lon;
    console.log(long)
    city = city.replace('%data%', loc.city);
    country = country.replace('%data%', loc.country);
    var location = city + country;
    console.log(location);
    $('#location').append(location);

    //using lat and lon from IP + WeatherAPI to get Weather Forecast... 
    var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=metric" + apiKey;
    //copy link from Console to check in browser
    console.log(api);
    
    //Creating Button that toggles between Celsius and Fahrenheit using true or false arguments of a separated variable (tempSwap)
    $.getJSON(api, function(celsData) {
      // Sets celsius as fefult and rounds it nearest number;
      var celsCalc = Math.round(celsData.main.temp);
      celsius = celsius.replace('%data%', celsCalc);
      
      // calculates celsius as fahrenheit and rounds to nearesy number;
      var fahrCalc = Math.round((celsData.main.temp * 9 / 5) + 32);
      fahrenheit = fahrenheit.replace('%data%', fahrCalc);
      
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
      
      //Next Creat a weather summary with icon and description
      
$.getJSON(api, function(weath) {
  //icon for weather summary
  icon = icon.replace("%data%", weath.weather[0]['icon']);
  
  // Now for the description but FIRST capitalises first letter of each word so it looks nicer
  var descStr = weath.weather[0]['description'].toLowerCase().split(' ');
   for (var i = 0; i < descStr.length; i++) {   
       descStr[i] = descStr[i].charAt(0).toUpperCase() + descStr[i].substring(1);     
   };
   descStr = descStr.join(' ');
  
  mainDesc = mainDesc.replace("%data%", descStr);
  var weather = icon + mainDesc;
  console.log(weather);
  $("#weather").append(weather);//description finished and appended
  /*Now to change colors of web page in relation to certain arrays of icons (from the api)*/
  var clear = ["01d"].indexOf(weath.weather[0].icon);
  var cloud = ["03d", "04d", "50d"].indexOf(weath.weather[0].icon); //includes mist
  var cloudClear = ["02d"].indexOf(weath.weather[0].icon);
  var rain = ["09d", "10d"].indexOf(weath.weather[0].icon);
  var thunder = ["11d"].indexOf(weath.weather[0].icon);
  var snow = ["13d"].indexOf(weath.weather[0].icon);
  var clearNight = ["01n"].indexOf(weath.weather[0].icon);
  var cloudNight = ["03n", "04n", "50n"].indexOf(weath.weather[0].icon); //includes mist at night
  var cloudClearNight = ["02n"].indexOf(weath.weather[0].icon);
  var rainNight = ["09n", "10n"].indexOf(weath.weather[0].icon);
  var thunderNight = ["11n"].indexOf(weath.weather[0].icon);
  var snowNight = ["13n"].indexOf(weath.weather[0].icon);
  //var wth = "thNi"; //*Only use the wth variable to test each weather icon array (untag the test arguments below, and tag out the api based arguments -- untag and change the previous wth variable to check each array )*
  var bodyText = document.getElementById("background").style.color;
  var bodyHeader = document.getElementById("header").style.color;
  var bodyBackground = document.getElementById("background").style.background;
  var boxText = document.getElementById("allWeather").style.color;
  var boxBackground = document.getElementById("allWeather").style.background;
  var boxText = document.getElementById("allWeather").style.color;
  var tempBackground = document.getElementById("tempSwap").style.background;
  
  if /*(wth === "cl")*/(clear >= 0){
  bodyText = "#f1c40f";        
    bodyBackground = "#3498db";        
 boxBackground = "#2980b9";  
 boxText = "#ecf0f1"; 
 boxBackground = "#3498db"; 
      }
  else if /*(wth === "cld")*/(cloud >= 0) {  
    bodyText = "#3498db";      
    bodyBackground = "#ecf0f1";
 bodyHeader = "#f1c40f";
 boxBackground = "#2980b9"; 
 tempBackground = "#3498db"; 
      } 
  else if /*(wth === "cldcl")*/(cloudClear >= 0){
    bodyBackground = "#2980b9"; 
 bodyHeader = "#f1c40f";   
 boxBackground = "#ecf0f1"; 
 tempBackground = "#2980b9";       
      } 
  else if /*(wth === "rn")*/(rain >= 0){      
 bodyBackground = "#2980b9";   
 bodyText = "#34495e";
 bodyHeader = "#34495e";            
 boxBackground = "#95a5a6"; 
 tempBackground = "#34495e";      
      }    
  else if /*(wth === "thn")*/(thunder >= 0) {
  bodyBackground = "#2980b9";   
    bodyText = "#c0392b";
 bodyHeader = "#f1c40f";            
 boxBackground = "#f1c40f";     
 tempBackground = "#c0392b";    
      } 
  else if /*(wth === "snww")*/(snow >= 0){  
    bodyBackground = "#2980b9";   
    bodyText = "#ecf0f1";
 bodyHeader = "#34495e";            
 boxBackground = "#a5f2f3"; 
 tempBackground = "#34495e"; 
      } 
  else if /*(wth === "clNi")*/(clearNight >= 0){
 bodyText = "#f1c40f";        
 bodyBackground = "#2c3e50"; 
 bodyHeader = "#e74c3c";            
 boxBackground = "#34495e";
 boxText = "#f1c40f";
 tempBackground = "#2c3e50"; 
      } 
  else if /*(wth === "cldNi")*/(cloudNight >= 0){       
 bodyText = "#ecf0f1";        
 bodyBackground = "#7f8c8d";
 bodyHeader = "#e74c3c";            
 boxBackground = "#34495e";          
 boxText = "#f1c40f";
 tempBackground = "#2c3e50";
      } 
  else if /*(wth === "cldclNi")*/(cloudClearNight >= 0) {
  bodyText = "#f1c40f";        
  bodyBackground = "#2c3e50"; 
 bodyHeader = "#e74c3c";            
 boxBackground = "#95a5a6";
boxText = "#2c3e50";
 tempBackground = "#2c3e50";
      } 
  else if /*(wth === "rnNi")*/(rainNight >= 0) {      
    bodyBackground = "#2c3e50";   
    bodyText = "#3498db";
 bodyHeader = "#f1c40f";            
 boxBackground = "#95a5a6"; 
boxText = "#2980b9";
 tempBackground = "#2980b9";
      } 
  else if /*(wth === "thNi")*/ (thunderNight >= 0) {
    bodyBackground = "#2c3e50";   
    bodyText = "#f1c40f";
 bodyHeader = "#e74c3c";            
 boxBackground = "#f1c40f"; 
boxText = "#c0392b";
  tempBackground = "#c0392b";
      } 
  else if /*(wth === "snNi")*/ (snowNight >= 0) {
     bodyBackground = "#2c3e50";   
    bodyText = "#f1c40f";
 bodyHeader = "#a5f2f3";            
 boxBackground = "#a5f2f3"; 
boxText = "#34495e";
 tempBackground = "#f1c40f";
      }
});
      
      
    });
  });
});