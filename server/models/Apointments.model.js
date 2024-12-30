const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  
  patientid:{
    type: Schema.Types.ObjectId, 
    ref: 'users'
  },

  patientname:{
    type:String
  },

  age:{
    type:Number,
  },

  weight:{
    type:Number
  },

  problem:{
    type:String
  },

  consultionFees:{
    type:Number
  },

  totalPay:{
    type:Number
  },

  doctorid:{
    type: Schema.Types.ObjectId, 
    ref: 'users'
  },

  doctorname:{
    type:String
  },

  doctorspecialist:{
    type:String
  },

  date:{
    type:Date,
  },

  time:{
    type:String,
  },

  status:{
    type:String,
    enum:['Scheduled','Missed', 'Completed'],
    default:'Scheduled'
  },

  isRescheduled:{
    type:Boolean
  },
 
  createdDate:{
    type:Date,
    default: Date.now
  }

});

const Appointments = mongoose.model('appointments',appointmentSchema );
module.exports = Appointments;