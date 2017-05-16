document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      events: [],
      title: '',
      start: '',
      end: '', 
    },
    methods: {
    	addEvent: function(){
    		var params = {
    			title: this.title,
    			start: this.start, 
    			end: this.end,
    			user_id: 9
    		}

    		$.post('http://localhost:3000/api/v1/events.json', params, function(result){
    			this.events.push(result);
    		}.bind(this));
    	}, 
    }
  });
});
