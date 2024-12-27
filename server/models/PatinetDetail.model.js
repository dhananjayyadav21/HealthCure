const mongoose = require('mongoose');
const { Schema } = mongoose;

const patientDetailSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },

    contact:{
        type:Number,
        required:true
    },

    bloodgroup:{
        type:String
    }
});

const PatientDetail = mongoose.model('patientDetail', patientDetailSchema);
module.exports = PatientDetail;