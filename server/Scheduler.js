const mongoose = require('mongoose');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const Appointment = require("./models/Apointments.model");


// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider (e.g., Gmail, Outlook)
  auth: {
    user: "ry8999014@gmail.com", // Your email
    pass: 'jakvwswlljimhipdt',   // Your email password or app password
  },
});

// Send Email Function
async function sendEmail(patientName, patientEmail, appointmentId, status) {
  const mailOptions = {
    from: 'ry8999014@gmail.com',
    to: patientEmail,
    subject: `Appointment Status Updated - ${status}`,
    text: `Dear ${patientName},\n\nYour appointment (ID: ${appointmentId}) status has been updated to: ${status}.\n\nThank you.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${patientEmail} for appointment ID: ${appointmentId}`);
  } catch (error) {
    console.error(`Error sending email for appointment ID: ${appointmentId}`, error);
  }
}

// Cron Job: Runs Every Minute
cron.schedule('* * * * *', async () => {
  try {
    const now = new Date();
    const fifteenMinutesAgo = new Date(now.getTime() - 15 * 60000);

    // Fetch Appointments with Scheduled Status
    const appointments = await Appointment.find({ status: 'Scheduled' });

    for (const appointment of appointments) {
      const appointmentDateTime = new Date(appointment.date);
      const [hours, minutes] = appointment.time.split(':');
      appointmentDateTime.setHours(parseInt(hours), parseInt(minutes));

      if (appointmentDateTime < fifteenMinutesAgo) {
        // Update Status to Missed
        appointment.status = 'Missed';
        await appointment.save();

        // Send Email Notification
        const patientEmail = `${appointment.patientname.toLowerCase().replace(/\s/g, '')}@gmail.com`; // Generate email based on name (replace with actual logic)
        await sendEmail(appointment.patientname, patientEmail, appointment._id, appointment.status);
      }

      console.log("Cron job is running... 3");
    }
  } catch (error) {
    console.error('Error updating appointments:', error);
  }
});

console.log('Cron job with email notifications is running...');
