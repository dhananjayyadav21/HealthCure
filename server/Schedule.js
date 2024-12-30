const mongoose = require('mongoose');
const cron = require('node-cron');
const Appointment = require('./models/Apointments.model');

cron.schedule("* * * * *", async () => {
  try {
    const now = new Date();
    
    // Get the date and time 15 minutes ago
    const fifteenMinutesAgo = new Date(now.getTime() - 15 * 60000);

    // Combine date and time fields to create a Date object
    const appointments = await Appointment.find({ status: "Scheduled" });

    for (const appointment of appointments) {
      const appointmentDateTime = new Date(appointment.date);
      const [hours, minutes] = appointment.time.split(":");
      appointmentDateTime.setHours(parseInt(hours), parseInt(minutes));

      // Check if appointment is overdue
      if (appointmentDateTime < fifteenMinutesAgo) {
        appointment.status = "Missed";
        await appointment.save();
        console.log(`Appointment ${appointment._id} updated to "Missed".`);
      }
    }

    console.log("Cron job is running... 1");
  } catch (error) {
    console.error("Error updating appointments:", error);
  }
});

console.log("Cron job is running...");
