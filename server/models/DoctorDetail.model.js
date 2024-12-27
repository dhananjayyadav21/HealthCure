const mongoose = require('mongoose');
const { Schema } = mongoose;

const doctorDetailSchema = new Schema({
  
  userid:{
    type: Schema.Types.ObjectId, 
    ref: 'users'
  },

  specialist:{
    type:String,
  },

  hospital:{
    type:String,
  },

  hospitalAddress:{
    type:String,
  },

  hospitalContact:{
    type:String,
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