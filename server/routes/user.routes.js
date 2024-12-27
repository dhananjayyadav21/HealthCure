const express = require("express");
const User = require("../models/User.model");
const DoctorDetail = require("../models/DoctorDetail.model");
const PatientrDetail = require("../models/PatinetDetail.model");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');
const FetchUser = require('../middleware/FetchUser.middleware');
require('dotenv').config();

const AuthToken_Secrate = process.env.Secrate_key;
const router = express.Router();

//============================== create user using POST:/api/authentication/signup http request ===========================
router.post("/signup",
  [
    body("name")
      .isLength({min: 5}).withMessage("user name should be minimum 5 characters required!"),
    body("email")
      .trim().isEmail().withMessage("should be valide email required!"),
    body("password")
      .isLength({min: 5}).withMessage("password should be minimum 5 characters required!"),
    body("role")
      .trim().notEmpty().custom((value) => value == "doctor" || value == "patient").withMessage("role must be doctor or patient"),
  ],
  async (req, res) => {

    // if accured validation error, send bad request
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({error: error.array(),
      });
    }

    try {

        // check user alrady exist or not
        let user = await User.findOne({email:req.body.email});
        if(user){
        return res.status(400).json({error:"user alrady register with this email address"});
        }

        // genrate hash password
        let password = req.body.password;
        const Salt = await bcrypt.genSalt(10);
        const sequrepassword = await bcrypt.hash(password.toString(), Salt); 

        user = await User.create({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        password: sequrepassword,
        });

        let doctorDetail = null;
        if (user.role == "doctor"){
            doctorDetail = await DoctorDetail.create({
            userid: user._id,
            specialist: req.body.specialist,
            hospital: req.body.hospital,
            hospitalAddress: req.body.hospitalAddress,
            hospitalContact: req.body.hospitalContact,
            Fees: req.body.Fees,
            weekAvailability: req.body.weekAvailability,
            });
        }

        let patientrDetail = null;
        if (user.role == "patient"){
            patientrDetail = await PatientrDetail.create({
            userid: user._id,
            contact: req.body.contact,
            bloodgroup: req.body.bloodgroup,
            });
        }
        success = true;
        res.status(200).json({success,msg:"register Successfully"});
      
    } catch (error) {
        success = false;  
        res.status(500).json({
            message: "Some internal server issue for creating user",
            error: error});
    }
  }
);



//============================== login user using POST:/api/authentication/signin http request ===========================
router.post('/signin',
    [
        body("email")
          .trim().isEmail().withMessage("should be valide email required!"),
        body("password")
          .isLength({min: 5}).withMessage("password should be minimum 5 characters required!"),
      ],
    async (req,res)=>{

    // if accured validation error, send bad request
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({error: error.array()});
    }

    try {
        
        // check user register or not
        let user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).json({error:"plese try with right credentials"});
        }
        console.log(user);

        //compare hasdpassword
        let passwordcompare = await bcrypt.compare(req.body.password.toString(), user.password);
        if(!passwordcompare){
            return res.status(400).json({error:"plese try with right credentials"});
        }

        //create auth token for login user 
        const Data = {
           user:{
             userid:user.id,
             useremail:user.email,
             userrole:user.role
           }
        } 

        const AuthToken = Jwt.sign(Data,AuthToken_Secrate);
        success = true;
        res.status(400).json({success,AuthToken});

    } catch (error) {
        success:false
        res.status(500).json({
        message: "Some internal server issue for login user",
        error: error}); 
    }
});


//========================= get user details using POST:/api/authentication/getuser http request ===========================
router.post('/getuser',FetchUser,async(req,res)=>{

    //provide user detail using user id
    try {
        let userid = req.user.userid;
        let user = await User.findOne({_id:userid}).select('-password');
        let Patient = await PatientrDetail.findOne({userid:userid}).select('-password');
        let doctor = await DoctorDetail.findOne({userid:userid}).select('-password');
        res.status(200).json({user,Patient,doctor});  

    } catch (error) {
        return res.status(500).json({
        message:"Some internal server error for getting user details", 
        error:error});
    }
})

module.exports = router;
