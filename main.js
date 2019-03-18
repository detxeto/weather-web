//https://api.myjson.com/bins/i8run//
//icon font:http://openweathermap.org/img/w/10d.png//




fetch('https://api.myjson.com/bins/i8run')
	.then(function (response) {
		return response.json();
	})
	.then(function (myJson) {

		var cities = myJson;
		app.cities = myJson.list;
	})
	.catch(function (error) {
		alert("Wrong way")
	});









var app = new Vue({

	el: "#app",
	data: {

		cities: [],
		theWeather: [],
		citSearch:"",
		iconList:"",
	},

	computed: {
		filteredcard: function () {

			return this.cities.filter(zity =>
				zity.name.toLowerCase().match(this.citSearch.toLowerCase())


			)
		},
		
		
										
			
		

	},

	methods: {

		
	},


	






})
