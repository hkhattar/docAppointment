


console.log(' server user controller')

var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment')
var User = mongoose.model('User');

module.exports = {



	show_appointments: function(req, res)
	{
		console.log('inside show_appointment server controller')
	},

	create_appointment: function(req,res)
	{
		console.log('inside appointment create server controller')
		// console.log('POST DATA',req.body.user._id);

		// User.findOne({_id:req.body.user._id},function(err,user){
		// 	var appointment = new Appointment({complaint:req.body.complaint,date:req.body.date,time:req.body.time,name:req.body.name});
			// appointment._user = user._id;
			

		// })
		
	

		
	},

	addUser: function(req, res){
		console.log('addUser function in server controller')
		console.log(req.body,'req.body')
			var newUser = new User(req.body);
			newUser.save(function(err, user){
				if(err){
					res.json(err);
				}
				else {
					res.json(newUser);
				}
			})
		},


	login: function(req, res){
			// console.log(req.params.name);
			User.find({name: req.params.name}, function(err, user){
				if(user.length < 1){
					console.log("messed up getting user");
					res.json({user:"user not found"})
				}
				else{
					res.json(user);
				}
			})
		},


}




