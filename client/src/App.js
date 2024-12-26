import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import GetStart from "./pages/GetStart";
import OpeningPage from "./components/OpeningPage";
import WelcomePage from "./components/WelcomePage";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import DoctorDetail from "./pages/DoctorDetail";
import BookSedule from "./components/BookSedule";
import PatientsAppointmentDetail from "./pages/PatientsAppointmentDetail";
import AppointmentBill from "./components/AppointmentBill";

import MyAppointment from "./pages/MyAppointment";
import Appointmentcard from "./components/Appointmentcard";


import Reschedule from "./pages/Reschedule";
import PatientDetailAfterBook from "./components/PatientDetailAfterBook";

import AvailableSlots from "./components/AvailableSlots";
import Notification from "./components/Notification";

import Notfound from "./pages/Notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/getStart" element={<GetStart />} />
          <Route path="/openingPage" element={<OpeningPage />} />
          <Route path="/welcomePage" element={<WelcomePage />} />

          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />

          <Route path="/doctorDetail/:id" element={<DoctorDetail />} />
          <Route path="/bookSedule" element={<BookSedule />} />
          <Route path="/patientsAppointmentDetail" element={<PatientsAppointmentDetail />} />
          <Route path="/appointmentBill" element={<AppointmentBill />} />

          <Route path="/appointment" element={<MyAppointment />} />
          <Route path="/appointmentcard" element={<Appointmentcard />} />

         
          <Route path="/reschedule" element={<Reschedule />} />
          <Route path="/patientDetailAfterBook/:id" element={<PatientDetailAfterBook />} />

          <Route path="/availableslots" element={<AvailableSlots />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
