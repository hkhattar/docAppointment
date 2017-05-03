app.controller('user_controller', function($scope, $routeParams, $location, user_factory,dashboard_factory,appointment_factory){
	
	console.log('inside user_controller')
	$scope.addUser = function()
	{
		console.log('inside addUser function in client user controller')
		console.log('$scope.newUser',$scope.newUser)
		user_factory.addUser($scope.newUser, function(data){
			console.log('data',data)
	
			if(data.data){
				console.log(data.data);
				console.log("there is an error");
				$scope.error = data.data.errors.name.message;
				$scope.newUser = {};
			}
			else{
				$scope.user = data;
				$scope.newUser = {};		
			}
		})
	}

	$scope.login = function(oldUser){
		user_factory.login(oldUser, function(data){
			if(data.user){
				$scope.no_user = data.user;
				$scope.oldUser = {};
			}
			else{
				// console.log(data);
				$scope.user = data;
				$scope.oldUser = {};				
			}
		})
	}


})