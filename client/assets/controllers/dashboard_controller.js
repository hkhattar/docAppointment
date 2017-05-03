app.controller('dashboard_controller', function($scope, $routeParams, $location, user_factory, dashboard_factory,appointment_factory){
	
	dashboard_factory.getAllAppt(function(data){
		$scope.appts = data;
		console.log($scope.appts);
		//to populate the table
	})

	user_factory.getUser(function(data){
		$scope.user = data;
		// got user for id and name etc
		console.log($scope.user);
		console.log('*********************')
	})



	


})