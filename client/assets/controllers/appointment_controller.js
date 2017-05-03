
      
      


app.controller('appointment_controller', function($scope, $routeParams, $location, user_factory, appointment_factory, dashboard_factory)
{


    user_factory.getUser(function(data)
    {
		$scope.user = data;
		// got user, now create poll with user info
		// console.log($scope.user);
	})


	dashboard_factory.getAllAppt(function(data){
		$scope.appts = data;
		console.log($scope.appts);
		//to populate the table
	})

	function setAppointment(data)
    {
        $scope.appointment = data;
        console.log('$scope.appointment',$scope.appointment)
    }


      $scope.create_appointment = function()
      {
        console.log('inside create_appointment')
        console.log('$scope.newAppointment',$scope.newAppointment)

        var checks = $scope.appts
		var thing = Date.parse($scope.newAppointment.date);

		function checkdate(thing, checks)
		{
			var count =0;
				
			for(var i = 0; i<checks.length; i++)
			{
				var schedules = Date.parse(checks[i].date);
				console.log(schedules);					
				if(thing == schedules)
				{
					count++;
				}
			}
			return count;
		}

		var number = checkdate(thing, checks);
		console.log(number);	

		if(number>2)
		{
			console.log('hey')
			$scope.cannot = "too many appointments for this day, choose any other date";
			$scope.newAppt ={};
		}
		else
		{

			console.log('hey two');
			if($scope.newAppointment == undefined)
			{
				$scope.error = "cannot be empty dummy";
				$location.path('/new_appointment');	
			}
			else if($scope.newAppointment.complain.length>10)
        	{
	        	console.log('greater than 10 complain')
	        	$scope.error = {};
	        	var user = $scope.user
	        	console.log('user',user)
	        	appointment_factory.create_appointment($scope.newAppointment,user,setAppointment)
	        	$scope.newAppointment = {};
	        	$location.url('/dashboard')

        	}
        	else
        	{
        	$scope.error = {complain_length: 'Your complain must be at least 10 characters long'}
        	}
        
      	}

	}//end of create_appointment function
      
    })
      



