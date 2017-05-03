console.log('appointment.model')

var mongoose = require('mongoose');
var Schema = mongoose.Schema;






var AppointmentSchema = new mongoose.Schema({
	
	name:{type: String},
	_user: {type:Schema.Types.ObjectId, ref: 'User'},
	date:{type: String},
	time:{type: String},
	complain:{type: String
	}
	
});



mongoose.model('Appointment',AppointmentSchema);


