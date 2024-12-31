const nodemailer = require("nodemailer");
require("dotenv").config();

const MyEmail = process.env.EMAIL;
const PASS = process.env.PASS;

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: MyEmail,
    pass: PASS,
  },
});

// Send Email Function
async function sendEmail(patientName, patientEmail, appointmentId, status) {
  const mailOptions = {
    from: MyEmail,
    to: patientEmail,
    subject: `Appointment Status Updated - ${status}`,
    text: `Dear ${patientName},\n\nYour appointment (ID: ${appointmentId}) status has been updated to: ${status}.\n\nThank you.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(
      `Email sent to ${patientEmail} for appointment ID: ${appointmentId}`
    );
  } catch (error) {
    console.error(
      `Error sending email for appointment ID: ${appointmentId}`,
      error
    );
  }
}

module.exports = sendEmail;
