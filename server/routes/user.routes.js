const express = require("express");
const User = require("../models/User.model");
const DoctorDetail = require("../models/DoctorDetail.model");
const PatientrDetail = require("../models/PatinetDetail.model");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
const FetchUser = require("../middleware/FetchUser.middleware");
require("dotenv").config();

const AuthToken_Secrate = process.env.Secrate_key;
const router = express.Router();
const { ObjectId } = require("mongodb");

//============================== create user using POST:/api/authentication/signup http request ===========================
router.post(
  "/signup",
  [
    body("name")
      .isLength({ min: 5 })
      .withMessage("Name must be at least 5 characters required!"),
    body("email")
      .trim()
      .isEmail()
      .withMessage("Email address appears to be invalid!"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Passwords must be at least 5 characters required!"),
    body("role")
      .trim()
      .notEmpty()
      .custom((value) => value == "doctor" || value == "patient")
      .withMessage("Role must be doctor or patient"),
  ],
  async (req, res) => {
    // if accured validation error, send bad request
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    try {
      // check user alrady exist or not
      let user = await User.findOne({ email: req.body.email.toLowerCase() });
      if (user) {
        return res.status(400).json({
          errors: [{ msg: "User already registered with this email address" }],
        });
      }

      // genrate hash password
      let password = req.body.password;
      const Salt = await bcrypt.genSalt(10);
      const sequrepassword = await bcrypt.hash(password.toString(), Salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email.toLowerCase(),
        role: req.body.role,
        password: sequrepassword,
      });

      let doctorDetail = null;
      if (user.role == "doctor") {
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
      if (user.role == "patient") {
        patientrDetail = await PatientrDetail.create({
          userid: user._id,
          contact: req.body.contact,
          bloodgroup: req.body.bloodgroup,
        });
      }
      success = true;
      res.status(200).json({ success, message: "Register Successfully" });
    } catch (error) {
      success = false;
      res.status(500).json({
        message: "Some internal server issue for creating user",
        errors: [{ msg: error }],
      });
    }
  }
);

//============================== login user using POST:/api/authentication/signin http request ===========================
router.post(
  "/signin",
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Email address appears to be invalid!"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Passwords must be at least 5 characters required!"),
  ],
  async (req, res) => {
    // if accured validation error, send bad request
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    try {
      // check user register or not
      let user = await User.findOne({ email: req.body.email.toLowerCase() });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Plese try with right credentials" }] });
      }

      //compare hasdpassword
      let passwordcompare = await bcrypt.compare(
        req.body.password.toString(),
        user.password
      );
      if (!passwordcompare) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Plese try with right credentials" }] });
      }

      //create auth token for login user
      const Data = {
        user: {
          userid: user.id,
          useremail: user.email,
          userrole: user.role,
        },
      };

      const AuthToken = Jwt.sign(Data, AuthToken_Secrate);
      const Role = user.role;
      success = true;
      res
        .status(200)
        .json({ message: "Login Successfully", success, AuthToken, Role });
    } catch (error) {
      success = false;
      res.status(500).json({
        message: "Some internal server issue for login user",
        errors: [{ msg: error }],
      });
    }
  }
);

//========================= get user details using POST:/api/authentication/getuser http request ===========================
router.get("/getuser", FetchUser, async (req, res) => {
  //provide user detail using user id
  try {
    let userid = req.user.userid;
    let user = await User.findOne({ _id: userid }).select("-password");
    let Patient = await PatientrDetail.findOne({ userid: userid }).select(
      "-password"
    );
    let Doctor = await DoctorDetail.findOne({ userid: userid }).select(
      "-password"
    );
    res.status(200).json({ user, Patient, Doctor });
  } catch (error) {
    return res.status(500).json({
      message: "Some internal server error for getting user details",
      errors: [{ msg: error }],
    });
  }
});

//========================= getall doctor details using POST:/api/authentication/getuser http request ===========================
router.get("/allDoctor", async (req, res) => {
  //provide user detail using user id
  try {
    let AllDoctor = await User.aggregate([
      {
        $match: {
          role: "doctor",
        },
      },
      {
        $lookup: {
          from: "doctordetails",
          localField: "_id",
          foreignField: "userid",
          as: "doctorDetails",
        },
      },
      {
        $unwind: "$doctorDetails",
      },
      {
        $project: {
          password: 0,
        },
      },
    ]);

    res.status(200).json({ AllDoctor });
  } catch (error) {
    return res.status(500).json({
      message: "Some internal server error for getting alldoctors details",
      errors: [{ msg: error }],
    });
  }
});

//==================== get GetDoctorDetailById using POST:/api/authentication/GetDoctorDetailById http request ==================
router.get("/GetDoctorDetailById/:id", async (req, res) => {
  //provide GetDoctorDetailById using user id
  try {
    let doctorId = req.params.id;
    let doctorDetail = await User.aggregate([
      {
        $match: {
          _id: new ObjectId(doctorId),
          role: "doctor",
        },
      },
      {
        $lookup: {
          from: "doctordetails",
          localField: "_id",
          foreignField: "userid",
          as: "doctorDetails",
        },
      },
      {
        $unwind: "$doctorDetails",
      },
      {
        $project: {
          password: 0,
        },
      },
      {
        $limit: 1,
      },
    ]);

    if (doctorDetail.length > 0) {
      doctorDetail = doctorDetail[0];
      res.status(200).json(doctorDetail);
    } else {
      res.status(404).json({ errors: [{ msg: "Doctor Details Not found" }] });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Some internal server error for getting user details",
      errors: [{ msg: error }],
    });
  }
});

router.get("/getAvialbeDateForDoctor/:id", async (req, res) => {
  //provide GetDoctorDetailById using user id
  try {
    let doctorId = req.params.id;
    let date = req.query.date;
    const currentDate = new Date();

    const nextDays = (n) =>
      Array.from({ length: n }, (_, index) => {
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + index + 1);

        // Format as "DayName, YYYY-MM-DD"
        const dayName = nextDay.toLocaleDateString("en-US", {
          weekday: "long",
        });
        const formattedDate = nextDay.toISOString().split("T")[0]; // Format as YYYY-MM-DD

        return { dayName, formattedDate };
      });

    let nextDaysfordoctor = nextDays(20);
    res.status(200).json(nextDaysfordoctor);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Some internal server error for getting user details",
      errors: [{ msg: error }],
    });
  }
});

router.get("/getAvialbeTimeDateAndForDoctor/:id", async (req, res) => {
  //provide GetDoctorDetailById using user id
  try {
    let doctorId = req.params.id;
    let date = req.query.date;
    const generateTimeIntervals = (date) => {
      const currentDate = new Date();
  
      // Define the start and end times (10:00 AM to 2:00 PM)
      const startHour = 1; // 10 AM
      const endHour = 5; // 2 PM
  
      // Parse the selected date and set the time to start at 10 AM
      const selectedDateObj = new Date(date);
      selectedDateObj.setHours(startHour, 0, 0, 0); // Set the start time to 10:00 AM
  
      const availableIntervals = [];
  
      // Loop through and add 30-minute intervals
      while (selectedDateObj.getHours() < endHour) {
        const timeString = selectedDateObj.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
  
        // Add interval if it hasn't passed yet
        if (selectedDateObj > currentDate) {
          availableIntervals.push(timeString);
        }
  
        // Increment by 30 minutes
        selectedDateObj.setMinutes(selectedDateObj.getMinutes() + 30);
      }
  
      return availableIntervals;
  };

    let TimeIntervals = generateTimeIntervals(date);
    res.status(200).json(TimeIntervals);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Some internal server error for getting user details",
      errors: [{ msg: error }],
    });
  }
});

module.exports = router;
