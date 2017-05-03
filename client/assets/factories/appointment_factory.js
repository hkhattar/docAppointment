app.factory('appointment_factory',function($http){
        console.log('start apointment_factory');

     var factory = {};

       factory.create_appointment = function(newAppt,user,callback)
      {
        console.log('inside create appointment factory')
        console.log('user',user)
        console.log('newAppt',newAppt)

        $http.post('/appointments', {user: user, appointment: newAppt}).then(function(returned_data)
        {
          // console.log('newQuestion',newQuestion)
          if (typeof(callback) == 'function')
          {
            callback(returned_data.data);
            console.log('returned_data',returned_data)
          }
        });
      
      }








      factory.get_user = function(){
    // console.log('inside get_user in factory*******logged_user', logged_in_user)
        return logged_in_user;
      }

       

       
        return factory;
    })

