import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
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
          <Route path="/availableslots" element={<AvailableSlots />}/>
          <Route path="/shedule" element={<Shedule />}/>
          <Route path="/reschedule" element={<Reschedule />}/>
          <Route path="/notification" element={<Notification />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
