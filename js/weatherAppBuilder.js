$(document).ready(function() {
  var ip = "http://ip-api.com/json";
  //console.log(ip);
  var apiKey = "&appid=4375088c0dfb70bc8bf2c452aede24f5";
  //gets location of User through IP address
var latitude = "-33.8814";
var longitude = "151.18";

  var coloring = function(id, Text, Background) {
    var colorChange = "color: " + Text + "; background: " + Background + ";";
    document.getElementById(id).setAttribute("style", colorChange);
  };// function used to change the color of web page in relation to the weather 'icon'
  

  /*getJSON from ip api had been tagged out because,
  it doesn't work as a live page, due to security issues.
  I'm onsidering options to use it again so it will remain in place*/
  /*$.getJSON(ip, function(loc) {
    var location =
      '<h3 id="locData"> Sydney, NSW, Australia </h3>';
    console.log(location);
    $("#location").append(location);*/

    //using lat and lon from IP + WeatherAPI to get Weather Forecast...
    var api =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&units=metric" +
      apiKey;
    console.log(api);
    //Creating Button that toggles between Celsius and Fahrenheit using true or false arguments of a separated variable (tempSwap)
    $.getJSON(api, function(celsData) {
      // Sets celsius as defult and rounds it nearest number;
      var celsCalc = Math.round(celsData.main.temp);
      var celsius = celsCalc + "&#8451;";
      // calculates celsius as fahrenheit and rounds to nearesy number;
      var fahrCalc = Math.round(celsData.main.temp * 9 / 5 + 32);
      var fahrenheit = fahrCalc + "&#8457;";
      //button default is fahrenheit so fahrenheit is set as true vvvv
      var tempSwap = true;
      $("#tempSwap").html(fahrenheit);
      $("#tempSwap").on("click", function() {
        if (tempSwap === true) {
          // once clicked, tempSwap is false and Celsius
          $("#tempSwap").html(celsius);
          tempSwap = false;
        } else {
          // clicked again, tempSwap is true and Fahrenheit. Each click changes it back
          $("#tempSwap").html(fahrenheit);
          tempSwap = true;
        }
      });
      $.getJSON(api, function(weath) {
        // Now for the description but FIRST capitalises first letter of each word so it looks nicer
        var descStr = weath.weather[0]["description"].toLowerCase().split(" ");
        for (var i = 0; i < descStr.length; i++) {
          descStr[i] =
            descStr[i].charAt(0).toUpperCase() + descStr[i].substring(1);
        }
        descStr = descStr.join(" ");
        var weather =
          '<h6><img src="https://openweathermap.org/img/w/' +
          weath.weather[0]["icon"] +
          '.png" alt="" style="">(' +
          descStr +
          ")</h6>";
        $("#weather").append(weather);
        //console.log(weath.weather[0]["icon"]);
        switch (weath.weather[0]["icon"]) {
          case "01d": //clear
            coloring("background", "#f1c40f", "#3498db");
            coloring("box", "#2980b9", "#ecf0f1");
            coloring("temp", "#c0392b", "");
            break;
          case "01d":
          case "03d":
          case "04d":
          case "50d": //cloud
            coloring("background", "#3498db", "#ecf0f1");
            coloring("header", "#f1c40f", "");
            coloring("box", "", "#2980b9");
            coloring("temp", "", "#3498db");
            break;
          case "02d": //cloudClear
            coloring("background", "c0392b", "#2980b9");
            coloring("header", "#f1c40f", "");
            coloring("box", "", "#ecf0f1");
            coloring("temp", "", "#2980b9");

            break;
          case "09d":
          case "10d": //rain
            coloring("background", "#34495e", "#2980b9");
            coloring("box", "", "#95a5a6");
            coloring("temp", "", "#34495e");
            break;
          case "11d": //thunder
            coloring("background", "#c0392b", "#2980b9");
            coloring("header", "#f1c40f", "");
            coloring("box", "", "#f1c40f");
            coloring("temp", "", "#c0392b");
            break;
          case "13d": //snow
            coloring("background", "#ecf0f1", "#2980b9");
            coloring("header", "#34495e", "");
            coloring("box", "", "#a5f2f3");
            coloring("temp", "", "#34495e");
            break;
          case "01n": //clearNight
            coloring("background", "#f1c40f", "#2c3e50");
            coloring("header", "#e74c3c", "");
            coloring("box", "", "#34495e");
            coloring("temp", "", "#2c3e50");
            break;
          case "03n":
          case "04n":
          case "50n": //cloudNight
            coloring("background", "#ecf0f1", "#7f8c8d");
            coloring("header", "#e74c3c", "");
            coloring("box", "#f1c40f", "#34495e");
            coloring("temp", "", "#2c3e50");
            break;
          case "02n": //cloudClearNight:
            coloring("background", "#f1c40f", "#2c3e50");
            coloring("header", "#e74c3c", "");
            coloring("box", "#2c3e50", "#95a5a6");
            coloring("temp", "#f1c40f", "#2c3e50");
            break;
          case "09n":
          case "10n": //rainNight
            coloring("background", "#3498db", "#2c3e50");
            coloring("header", "#f1c40f", "");
            coloring("box", "#2980b9", "#95a5a6");
            coloring("temp", "#3498db", "#2980b9");
            break;
          case "11n": //thunderNight
            coloring("background", "#f1c40f", "#2c3e50");
            coloring("header", "#e74c3c", "");
            coloring("box", "#c0392b", "#f1c40f");
            coloring("temp", "", "#c0392b");
            break;
          case "13n": //snowNight
            coloring("background", "#f1c40f", "#2c3e50");
            coloring("header", "#a5f2f3", "");
            coloring("box", "#34495e", "#a5f2f3");
            coloring("temp", "#2c3e50", "#f1c40f");
            break;
        }
      });
    });
  //});
});
