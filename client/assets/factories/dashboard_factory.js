app.factory('dashboard_factory', function($http, $location){
	var factory = {};
	var appts = [];


	factory.getAllAppt = function(callback){
		$http.get('/getAllAppt').then(function(data){
			// console.log(data.data);
			appts = data.data;
			callback(appts);
		})
	}

	
	return factory;
})