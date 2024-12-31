# Healthcare Web App: Doctor Appointment Scheduling & Management

## User Registration and Authentication:🔒

#### Sign-Up: 
Users can register by providing their name, email, and password.
Login: Secure login using email and password with token-based authentication.
Password Reset: Users can reset their passwords through email if they forget them.

#### Technology: 📝
MERN Stack (MongoDB, Express.js, React, Node.js)
JWT (JSON Web Token) for authentication



## Doctor Scheduling System: 🩺

### View Available Doctors: 
Users can browse a list of available doctors based on specialties and availability.
Schedule Appointment: Users can select a doctor and schedule an appointment.
View Appointments: Users can view all their past, upcoming, and canceled appointments.

### Technology:
MongoDB to store doctor and appointment data. 📅 
React for front-end dynamic interactions.




## Missed Appointment Notification: ⏰
If a user misses an appointment, an email notification is automatically sent, reminding them of the missed appointment.
Reschedule Functionality: Users can reschedule their missed appointments.

### Technology:
Node.js for back-end processing. ✉️
Nodemailer for sending emails.




## Technologies Used:
MongoDB: NoSQL database to store user data, doctor information, appointments, and notifications.

Express.js: Framework to build the RESTful API and handle back-end requests.

React.js: Front-end library for building the user interface with dynamic updates.

Node.js: JavaScript runtime environment for server-side development.

JWT (JSON Web Token): For secure user authentication.

Nodemailer: For sending email notifications (e.g., for missed appointments).

Bcrypt.js: For password encryption.

Cron: For handling date and time functionalities (e.g., for scheduling).
