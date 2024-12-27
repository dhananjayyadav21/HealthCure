const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name:{
    type:String,
    required:true
  },

  email:{
    type:String,
    unique: true,
    required:true,
  },

  password:{
    type:String,
    required:true
  },

  role:{
    type:String,
    enum:['patient','doctor'],
    default:'patient'
  },
  
  Date:{
    type:Date,
    default: Date.now
  }

});

const User = mongoose.model('users',userSchema );
module.exports = User;