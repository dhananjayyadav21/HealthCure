const cron = require("node-cron");
const Appointment = require("./models/Apointments.model");
const User = require('./models/User.model');
const sendEmail = require("./Mailer");

cron.schedule("* * * * *", async () => {
  try {

    //====== Genrate 15 Minutes Ago Time
    const now = new Date();
    const fifteenMinutesAgo = new Date(now.getTime() - 15 * 60000);

    //====== Fetch Appointments with Scheduled Status
    const appointments = await Appointment.find({ status: "Scheduled" });

    for (const appointment of appointments) {
      const appointmentDateTime = new Date(appointment.date);
      const [hours, minutes] = appointment.time.split(":");
      appointmentDateTime.setHours(parseInt(hours), parseInt(minutes));

      //========= if appointment is overdue Status update as Missed
      if (appointmentDateTime < fifteenMinutesAgo) {
    
        appointment.status = "Missed";
        await appointment.save();

        //========= Find Patient detail Using patientid
        const user = await User.findById(appointment.patientid);

        //====== Send Email Notification
        const patientEmail = user.email; 
        const rescheduleLink = process.env.RESCHEDULE_LINK

        await sendEmail(
          appointment.patientname,
          patientEmail,
          appointment._id,
          appointment.status,
          rescheduleLink,
        );
      }
    }
     
    console.log("Cron job is running !");
  } catch (error) {
    console.error("Error updating appointments:", error);
  }
});

console.log("Scheduler start successfully with cron-job....!");
