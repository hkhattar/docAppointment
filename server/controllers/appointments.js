


console.log(' server appointment controller')

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
		console.log('POST DATA',req.body);

		User.findOne({_id:req.body.user._id},function(err,user){
			var appointment = new Appointment({complain:req.body.appointment.complain,date:req.body.appointment.date,time:req.body.appointment.time,name:req.body.user.name});
			appointment._user = user._id;

			console.log('appointment',appointment)

			appointment.save(function(err, user){
				if(err){
					res.json(err);
				}
				else {
					res.json(appointment);
				}
			})
			

		})
		
	

		
	},
	getAllAppt: function(req, res){
			Appointment.find({}, function(err, appts){
				if(err){
					console.log("err in the get allpolls");
				}
				else{
					res.json(appts);
				}
			})
		},

	


}