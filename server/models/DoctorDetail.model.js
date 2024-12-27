const mongoose = require('mongoose');
const { Schema } = mongoose;

const doctorDetailSchema = new Schema({
  
  userid:{
    type: Schema.Types.ObjectId, 
    ref: 'users'
  },

  specialist:{
    type:String,
    required:true,
  },

  hospital:{
    type:String,
    required:true
  },

  hospitalAddress:{
    type:String,
    required:true
  },

  hospitalContact:{
    type:String,
    required:true
  },

  Fees:{
    type:Number
  },

  weekAvailability:{
    type: [String]
  },
  
  Date:{
    type:Date,
    default: Date.now
  }

});

const DoctorDetail = mongoose.model('doctorDetails',doctorDetailSchema );
module.exports = DoctorDetail;