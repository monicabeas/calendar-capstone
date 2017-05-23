document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#weather',
    data: {
      location: '',
      weatherData: {},
      forecast: []
    },
    mounted: function(){
    	this.location = 'San Francisco',
    	this.grabWeather();
    }, 
    methods: {
    	grabWeather: function(){
    		var api_url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + this.location + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
    	
    	$.get(api_url, function(response){
    		this.weatherData = response.query.results.channel;
    		this.forecast = response.query.results.channel.item.forecast;
    	}.bind(this));
			}

			// getWeatherIcon: function(){
			// 	if(this.weatherData.item.condition.text.includes("Sunny") || this.weatherData.item.condition.text.includes("Clear")){
			// 		return "slicon-weather_sun";
			// 	} else if (day.text.includes("Cloudy")){
			// 		return "slicon-weather_cloud";
			// 	} else if (day.text.includes("Thunderstorms") || day.text.includes("Rain") || day.text.includes("Showers")){
			// 		return "slicon-weather_rain";
			// 	} else if (day.text.includes("Breezy") || (day.text.includes("Windy")) {
			// 		return "slicon-weather_wind";
			// 	}
			// }
    }
  });
});