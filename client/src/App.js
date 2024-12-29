import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserProfile from "./pages/Profile";

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
import AuthState from "./context/AuthState";
import GuardedRoute from "./components/GuardedRoute";

function App() {
  return (
    <>
      <AuthState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/userProfile"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null}
                  element={<UserProfile />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/getStart"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null}
                  element={<GetStart />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/openingPage"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null}
                  element={<OpeningPage />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/welcomePage"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null}
                  element={<WelcomePage />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/signin"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null} // Public route
                  element={<SignIn />}
                  redirectTo="/"
                />
              }
            />
            <Route
              path="/signUp"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null} // Public route
                  element={<SignUp />}
                  redirectTo="/"
                />
              }
            />
            <Route
              path="/doctorDetail/:id"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null}
                  element={<DoctorDetail />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/bookSedule"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null}
                  element={<BookSedule />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/patientsAppointmentDetail"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null}
                  element={<PatientsAppointmentDetail />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/appointmentBill"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null}
                  element={<AppointmentBill />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/appointment"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null}
                  element={<MyAppointment />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/appointmentcard"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null}
                  element={<Appointmentcard />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/reschedule"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null}
                  element={<Reschedule />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/patientDetailAfterBook/:id"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null}
                  element={<PatientDetailAfterBook />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/availableslots"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null}
                  element={<AvailableSlots />}
                  redirectTo="/signin"
                />
              }
            />
            <Route
              path="/notification"
              element={
                <GuardedRoute
                  isAuthenticated={localStorage.getItem("AuthToken")!=null}
                  element={<Notification />}
                  redirectTo="/signin"
                />
              }
            />

            <Route path="/*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </AuthState>
    </>
  );
}

export default App;
