const mongoose = require('mongoose');
const { Schema } = mongoose;

const patientDetailSchema = new Schema({
    userid:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },

    contact:{
        type:Number
    },

    bloodgroup:{
        type:String
    },
    Date:{
        type:Date,
        default: Date.now
    }
});

const PatientDetail = mongoose.model('patientDetail', patientDetailSchema);
module.exports = PatientDetail;