import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GetStart from "./pages/GetStart";
import WelcomePage from "./components/WelcomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AvailableSlots from "./components/AvailableSlots";
import Reschedule from "./components/Reschedule";
import Shedule from "./components/Shedule";
import Notification from "./components/Notification";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getStart" element={<GetStart />} />
          <Route path="/welcomePage" element={<WelcomePage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/availableslots" element={<AvailableSlots />} />
          <Route path="/shedule" element={<Shedule />} />
          <Route path="/reschedule" element={<Reschedule />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
