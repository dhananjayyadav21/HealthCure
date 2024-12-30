const express = require("express");
const Appointments = require("../models/Apointments.model");
const CommonHelper = require("../helpers/commonhelper");
const DoctorDetail = require("../models/DoctorDetail.model");
const FetchUser = require("../middleware/FetchUser.middleware");
const router = express.Router();
const { ObjectId } = require("mongodb");


//============================================ = [createappointment] ==============================================
router.post("/createappointment",FetchUser, async (req, res) => {
  try {

    let userid = req.user.userid;
    if (!userid) {
        return res.status(400).send({ error: 'Patient ID is required' });
    }

    const appointment = await Appointments.create({
      patientid:userid,
      age: req.body.age,
      weight: req.body.weight,
      problem: req.body.problem,
      consultionFees: req.body.consultionFees,
      totalPay: req.body.totalPay,
      doctorid: req.body.doctorid,
      date: req.body.date,
      time: req.body.time,
      status: req.body.status,
    });

    success = true;
    res.status(200).json({ success, message: "Appointment Created", appointment });

  } catch (error) {
    success = false;
    res.status(500).json({
      message: "Some internal server issue for creating appointment",
      errors: [{ msg: error }],
    });
  }
});


//============================================ = [createappointment] ==============================================
router.get("/getappointment",FetchUser, async (req, res) => {
  try {

    let userid = req.user.userid;
    if (!userid) {
        return res.status(400).send({ error: 'Patient ID is required' });
    }
    const appointments = await Appointments.find({patientid:userid})

    success = true;
    res.status(200).json({ success, message: "Appointment get", appointments });

  } catch (error) {
    success = false;
    res.status(500).json({
      message: "Some internal server issue for getting appointment",
      errors: [{ msg: error }],
    });
  }
});


//============================================ [getAvialbeDateForDoctor] ==============================================
router.get("/getAvialbeDateForDoctor/:id", async (req, res) => {
  //provide GetDoctorDetailById using user id
  try {
    let doctorId = req.params.id;
    const doctorDetails = await DoctorDetail.findOne({
      userid: new ObjectId(doctorId),
    });

    if (!doctorDetails) {
      return res.status(400).json({ errors: [{ msg: "Doctor Not Found" }] });
    }

    const nextDaysfordoctor = CommonHelper.nextDays(
      20,
      doctorDetails.weekAvailability || []
    );
    res.status(200).json(nextDaysfordoctor);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Some internal server error for getAvialbeDateForDoctor details",
      errors: [{ msg: error }],
    });
  }
});


//============================================ [getAvialbeTimeDateAndForDoctor] ==============================================
router.get("/getAvialbeTimeDateAndForDoctor/:id", async (req, res) => {
  //provide GetDoctorDetailById using user id
  try {
    let doctorId = req.params.id;
    let date = req.query.date;

    let filledSlots = await Appointments.find({
      doctorid: new ObjectId(doctorId),
      date: new Date(date),
    });

    let filledTimes = filledSlots.map((slot) => slot?.time);

    let TimeIntervalsWithStatus = CommonHelper.generateTimeIntervals(date).map(
      (time) => ({
        time,
        isAvailable: !filledTimes.includes(time),
      })
    );

    res.status(200).json(TimeIntervalsWithStatus);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Some internal server error for getAvialbeTimeDateAndForDoctor details",
      errors: [{ msg: error }],
    });
  }
});

module.exports = router;
