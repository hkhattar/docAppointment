var path = require('path');
var users = require('../controllers/users.js')//we can get functions from friends
var appointments = require('../controllers/appointments.js')//we can get functions from friends

module.exports = function(app){

	app.get('/',function(req,res){
		users.show_appointments(req,res)
	})

	app.get('/new_appointment', function(req, res) {
		// console.log('/users')
   		users.create_appointment(req,res)
    
	})

	app.get('/user/:name', function(req, res){
		users.login(req, res);
	})

	app.post('/user',function(req,res){
		users.addUser(req,res)
	})

	app.post('/appointments',function(req,res){
		console.log("POST DATA",req.body);
		appointments.create_appointment(req,res)
	})

	app.get('/getAllAppt', function(req, res){
		appointments.getAllAppt(req, res);
	})



	
}