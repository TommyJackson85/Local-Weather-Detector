const coloring = (id, text, background) => { //used in showWeatherData function
	let attributeChanges = "color: " + text + "; background: " + background + ";";
 	document.getElementById(id).setAttribute("style", attributeChanges);
};// function used to change the color of web page in relation to the weather 'icon'

const alterAttributeColors = function(icon){
	switch (icon) {
	case "01d": //clear
		coloring("background", "#f1c40f", "#3498db");
		coloring("box", "#2980b9", "#ecf0f1");
		coloring("tempSwap", "#ecf0f1", "#2980b9");
		break;
	case "03d":
	case "04d":
	case "50d": //cloud
		coloring("background", "#3498db", "#ecf0f1");
		coloring("header", "#f1c40f", "#ecf0f1");
		coloring("box", "#ecf0f1",  "#3498db");
		coloring("tempSwap", "#3498db", "#ecf0f1");
		break;
	case "02d": //cloudClear
		coloring("background", "#ecf0f1", "#2980b9");
		coloring("header", "#f1c40f", "");
		coloring("box", "#2980b9", "#ecf0f1");
		coloring("tempSwap", "#ecf0f1", "#2980b9");
		break;
	case "09d":
	case "10d": //rain
		coloring("background", "#34495e", "#2980b9");
		coloring("box", "#34495e", "#95a5a6");
		coloring("tempSwap", "#2980b9", "#34495e");
		break;
	case "11d": //thunder
		coloring("background", "#c0392b", "#2980b9");
		coloring("header", "#f1c40f", "");
		coloring("box", "#c0392b", "#f1c40f");
		coloring("tempSwap", "#f1c40f", "#c0392b");
		break;
	case "13d": //snow
		coloring("background", "#ecf0f1", "#2980b9");
		coloring("header", "#34495e", "");
		coloring("box", "#34495e", "#a5f2f3");
		coloring("tempSwap", "", "#34495e");
		break;
	case "01n": //clearNight
		coloring("background", "#f1c40f", "#2c3e50");
		coloring("header", "#e74c3c", "");
		coloring("box", "#e74c3c", "#34495e");
		coloring("tempSwap", "#f1c40f", "#e74c3c");
		break;
	case "03n":
	case "04n":
	case "50n": //cloudNight
		coloring("background", "#ecf0f1", "#7f8c8d");
		coloring("header", "#e74c3c", "");
		coloring("box", "#f1c40f", "#34495e");
		coloring("tempSwap", "", "#2c3e50");
		break;
	case "02n": //cloudClearNight:
		coloring("background", "#f1c40f", "#2c3e50");
		coloring("header", "#e74c3c", "");
		coloring("box", "#2c3e50", "#95a5a6");
		coloring("tempSwap", "#f1c40f", "#2c3e50");
		break;
	case "09n":
	case "10n": //rainNight
		coloring("background", "#3498db", "#2c3e50");
		coloring("header", "#f1c40f", "");
		coloring("box", "#2980b9", "#95a5a6");
		coloring("tempSwap", "#f1c40f", "#2980b9");
		break;
	case "11n": //thunderNight
		coloring("background", "#f1c40f", "#2c3e50");
		coloring("header", "#e74c3c", "");
		coloring("box", "#c0392b", "#f1c40f");
		coloring("tempSwap", "", "#c0392b");
		break;
	case "13n": //snowNight
		coloring("background", "#f1c40f", "#2c3e50");
		coloring("header", "#a5f2f3", "");
		coloring("box", "#34495e", "#a5f2f3");
		coloring("tempSwap", "#2c3e50", "#f1c40f");
		break;
	}
};

const showWeatherData = function(json) { // used after fetching weather api json
	alterAttributeColors(json.weather[0]["icon"]);
	const celsius = Math.round(json.main.temp) + "&#8451;";			
	const fahrenheit = Math.round(json.main.temp * 9 / 5 + 32) + "&#8457;";
	const tempButton = document.getElementById('tempSwap');
	tempButton.value = celsius;
	tempButton.innerHTML = tempButton.value; 
	tempButton.onclick = () => {
		tempButton.value = (tempButton.value == celsius) ? fahrenheit : celsius;
		return tempButton.innerHTML = tempButton.value; 
	}
	let weatherDesc = json.weather[0]["description"].toLowerCase().split(" ");
	for (let i = 0; i < weatherDesc.length; i++) {
		weatherDesc[i] = weatherDesc[i].charAt(0).toUpperCase() + weatherDesc[i].substring(1);
	}
	weatherDesc = weatherDesc.join(" ");

	document.getElementById('weather').innerHTML = '<h6><img src="https://openweathermap.org/img/w/' 
	+	json.weather[0]["icon"] + '.png" alt="" style="">(' + weatherDesc + ")</h6>";	
}
	//document.getElementById('weather').innerHTML = weather;
	//$(document).ready(function() { same as  >
document.addEventListener("DOMContentLoaded", function() {
	//const ip = "http://ip-api.com/json";
	const apiKey = "&appid=4375088c0dfb70bc8bf2c452aede24f5";
	const latitude = "-33.8814";
	const longitude = "151.18";
	
	/*getJSON from ip api had been tagged out because,
	it doesn't work as a live page, due to security issues.
	I'm onsidering options to use it again so it will remain in place*/
	/*$.getJSON(ip, function(loc) {
	var location =
	'<h3 id="locData"> Sydney, NSW, Australia </h3>';
	console.log(location);
	$("#location").append(location);*/  
	//using lat and lon from IP + WeatherAPI to get Weather Forecast...
	let api = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" +
	longitude + "&units=metric" + apiKey;
	console.log(api);
	//Creating Button that toggles between Celsius and Fahrenheit using true or false arguments of a separated variable (tempSwap)
	window.fetch(api, {
		method: 'GET'
	})
	.then(function(response){ 
		return response.json();
	})
	.then(function(weatherJson){
		console.log(weatherJson);
		showWeatherData(weatherJson);
	})
	.catch(error => console.error(`Fetch Error =\n`, error));
	});