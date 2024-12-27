const express = require('express');
const User = require('../models/User.model');
const DoctorDetail = require('../models/DoctorDetail.model');

const router = express.Router();

router.post('/login', async (req,res)=>{

    const user = await User.create({
        name:req.body.name,
        email:req.body.email,
        role:req.body.role,
        password:req.body.password
    });

    let doctorDetail = null;
    if(user.role=="doctor"){
        doctorDetail = await DoctorDetail.create({
            userid: user._id,
            specialist: req.body.specialist,
            hospital: req.body.hospital,
            hospitalAddress: req.body.hospitalAddress,
            hospitalContact: req.body.hospitalContact,
            Fees: req.body.Fees,
            weekAvailability: req.body.weekAvailability
        });
    }

    res.send({user,doctorDetail});
})

module.exports = router;