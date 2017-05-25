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
    		this.condition = response.query.results.channel.item.condition;
    	}.bind(this));
			},
			getWeatherIcon: function(){
				if(this.condition.text.includes("Sunny") || this.condition.text.includes("Clear")){
					return "slicon-weather_sun";
				} else if (this.condition.text.includes("Cloudy")){
					return "slicon-weather_cloud";
				} else if (this.condition.text.includes("Thunderstorms") || this.condition.text.includes("Rain") || this.condition.text.includes("Showers")){
					return "slicon-weather_rain";
				} else if (this.condition.text.includes("Breezy") || (this.condition.text.includes("Windy"))) {
					return "slicon-weather_wind";
				}
			}
    }
  });
});