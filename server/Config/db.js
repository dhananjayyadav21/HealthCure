const mongoose = require('mongoose');
require('dotenv').config();

const mongouri = process.env.DB_URI

const connectToMongo = () => {
    mongoose.connect(mongouri).
    then(()=>{ console.log('Connected to MongoDB successfully')}).catch((error)=>{
    console.error('Error connecting to MongoDB:', error.message);
    });
};

module.exports = connectToMongo;
