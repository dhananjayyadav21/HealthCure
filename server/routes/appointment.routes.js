const express = require("express");
const Appointments = require("../models/Apointments.model");
const CommonHelper = require("../helpers/commonhelper");
const DoctorDetail = require("../models/DoctorDetail.model");
const FetchUser = require("../middleware/FetchUser.middleware");
const router = express.Router();
const { ObjectId } = require("mongodb");

//============================================ [getAvialbeDateForDoctor] ==============================================
router.get("/getAvialbeDateForDoctor/:id", async (req, res) => {
  //provide GetDoctorDetailById using user id
  try {
    let doctorId = req.params.id;
    const doctorDetails = await DoctorDetail.findOne({userid: new ObjectId(doctorId),});

    if (!doctorDetails) {
      return res.status(400).json({ errors: [{ msg: "Doctor Not Found" }] });
    }

    const nextDaysfordoctor = CommonHelper.nextDays(20,doctorDetails.weekAvailability || []);
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
      message:
        "Some internal server error for getAvialbeTimeDateAndForDoctor details",
      errors: [{ msg: error }],
    });
  }
});

//============================================ = [createappointment] ==============================================
router.post("/createappointment", FetchUser, async (req, res) => {
  try {
    let userid = req.user.userid;
    if (!userid) {
      return res.status(400).send({ error: "Patient ID is required" });
    }

    const {doctorid, date, time} = req.body;

    // Check if an appointment already exists for the same doctor, date, and time
    const existingAppointment = await Appointments.findOne({
      where: {
        doctorid: doctorid,
        date: date,
        time: time,
      },
    });

    if (existingAppointment) {
      return res.status(400).json({
        success: false,
        message: "Unfortunately An appointment is already scheduled with this doctor at the selected date and time.",
      });
    }

    const appointment = await Appointments.create({
      patientid: userid,
      patientname: req.body.patientname,
      age: req.body.age,
      weight: req.body.weight,
      problem: req.body.problem,
      consultionFees: req.body.consultionFees,
      totalPay: req.body.totalPay,
      doctorid: req.body.doctorid,
      doctorname: req.body.doctorname,
      doctorspecialist: req.body.doctorspecialist,
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

//============================================= [getappointment] ==============================================
router.get("/getappointment", FetchUser, async (req, res) => {
  try {
    let userid = req.user.userid;
    if (!userid) {
      return res.status(400).send({ error: "Patient ID is required" });
    }

    const { appointmentStatus } = req.query;
    const appointments = await Appointments.find({
      $or: [{ patientid: userid }, { doctorid: userid }],
      status: appointmentStatus,
    });

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


//============================================= [updateAppointment] ==============================================
router.put("/updateAppointment/:id", FetchUser, async (req, res) => {
  try {
    const status  = req.body.status;
    const appointmentId = req.params.id;    
    if (!appointmentId || !status) {
      return res.status(400).send({ error: "Appointment ID and status are required" });
    }

    const appointment = await Appointments.findById(appointmentId);
    if (!appointment) {
      return res.status(404).send({ error: "Appointment not found" });
    }
    
    appointment.status = status;
    await appointment.save();
    const success = true;
    
    res.status(200).json({ success, message: "Appointment status updated", appointment });
  } catch (error) {
    const success = false;
    res.status(500).json({
      message: "Some internal server issue while updating the appointment status",
      errors: [{ msg: error.message }],
    });
  }
});


//============================================= [rescheduleAppointment] ==============================================
router.put("/rescheduleAppointment", FetchUser, async (req, res) => {
  try {

    const date = req.body.date;
    const time = req.body.time;
    const appointmentid = req.body.appointmentid;

    if (!appointmentid) {
      return res
        .status(400)
        .send({ error: "Appointment ID are required" });
    }

    const appointment = await Appointments.findById(appointmentid);
    if (!appointment) {
      return res.status(404).send({ error: "Appointment not found" });
    }

    appointment.date = date;
    appointment.time = time;
    appointment.status = "Scheduled"
    appointment.isRescheduled = true
    await appointment.save();
    const success = true;
   
    console.log(appointment);

    res
      .status(200)
      .json({ success, message: "Appointment Rescheduling Successfully", appointment });
  } catch (error) {
    const success = false;
    res.status(500).json({
      message:
        "Some internal server issue while rescheduling the appointment ",
      errors: [{ msg: error.message }],
    });
  }
});


module.exports = router;
