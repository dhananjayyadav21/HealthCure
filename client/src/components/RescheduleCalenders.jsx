import React, { useState,useContext,useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
const ReSeduleCalender = ({AppointmentsDetails}) => {

  // Context to access methods from AuthContext
  const Context = useContext(AuthContext);
  const { GetAvialbeDateForDoctor, GetAvialbeTimeDateAndForDoctor, rescheduleAppointment } = Context;

  // States for managing dates, time slots, and reschedule form data
  const [dates, setDates] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [reScheduleDateTime, setReScheduleDateTime] = useState({
    date: "",
    time: "",
  });

  // Extracting required details from props
  const doctorId = AppointmentsDetails?.doctorid;
  const navigate = useNavigate();
  const refClose = useRef(null);

  // Effect to fetch available dates
  console.log(AppointmentsDetails);
  useEffect(() => {
    nextDays();
    // eslint-disable-next-line
  }, []);

  // Generate an array of the next 14 days
  const nextDays = async () => {
    try {
      let res = await GetAvialbeDateForDoctor(doctorId);
      setDates(res);
    } catch (error) {
      console.log("Error fetching available dates:", error);
    }
  };

  const onDateChange = (event) => {
    GetAvialbeTimeForDate(event.target.value);
    OnChange(event);
  };

  // Fetch available time slots for a selected date
  const GetAvialbeTimeForDate = async (date) => {
    try {
      let times = await GetAvialbeTimeDateAndForDoctor(doctorId, date);
      setTimeSlots(times);
    } catch (error) {
      console.log(error);
    }
  };

  // let date = nextDays();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataObject = reScheduleDateTime;
    formDataObject["appointmentid"] = AppointmentsDetails?._id;

    //---- Reschedule Appointment
    const res = await rescheduleAppointment(formDataObject);
    if(res?.success === true){
        refClose.current.click();
        navigate('/');
        alert(`${res?.message}`)
    }
  };

  const OnChange = (e) => {
    setReScheduleDateTime({
      ...reScheduleDateTime,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        {/* //================================================================================================= */}

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="RescheduleModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="RescheduleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="RescheduleModalLabel">
                  Reschedule Appointment
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form
                  onSubmit={handleSubmit}
                  className="BookSchedule-container potion-relative"
                  id="RescheduleForm"
                >
                  {/* Sedule Date */}
                  <section className="SeduleDate mb-4">
                    <small>
                      <p className="fw-bold">Date</p>
                    </small>
                    <div className="row g-2">
                      {dates?.map((day, index) => (
                        <div className="col-3" key={index}>
                          <div
                            className={`btn btn-outline-info fw-bolder rounded-3 d-flex flex-column justify-content-center calandar-day cursor-pointer`}
                          >
                            <label
                              className={`d-flex flex-column align-items-center cursor-pointer`}
                              htmlFor={"date" + day.formattedDate}
                            >
                              <input
                                type="radio"
                                name="date"
                                id={"date" + day.formattedDate}
                                value={day.formattedDate}
                                onChange={onDateChange}
                                className="visually-hidden cursor-pointer"
                                required
                              />
                              <p className="m-0 text-uppercase cursor-pointer">
                                {day.dayName.substring(0, 3)}
                              </p>
                              <p className="m-0 cursor-pointer">
                                {new Date(day.formattedDate).getDate()}
                              </p>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Morning Slots */}
                  <section className="MorningSlots my-4">
                    <small>
                      <p className="fw-bold">Time Slots</p>
                    </small>
                    <div className="row g-2">
                      {timeSlots?.map((e) => (
                        <div className="col-4">
                          <div
                            className={`btn fw-bolder rounded-3 d-flex flex-column justify-content-center calandar-time ${
                              !e.isAvailable
                                ? "btn-outline-danger cursor-not-allowed"
                                : "btn-outline-info cursor-pointer"
                            }`}
                          >
                            <label
                              className={`d-flex align-items-center cursor-pointer justify-content-center ${
                                !e.isAvailable
                                  ? "btn-outline-danger cursor-not-allowed"
                                  : "btn-outline-info cursor-pointer"
                              }`}
                              title={
                                !e.isAvailable ? "Not Available" : "Available"
                              }
                            >
                              <input
                                type="radio"
                                name="time"
                                value={e.time}
                                disabled={!e.isAvailable}
                                onChange={OnChange}
                                className="visually-hidden"
                                required
                              />
                              <p className="m-0 text-center text-uppercase">
                                {e.time}
                              </p>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light"
                  data-bs-dismiss="modal"
                  ref={refClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="RescheduleForm"
                  className="btn btn-info text-white"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* //================================================================================================= */}
      </div>
    </>
  );
}

export default ReSeduleCalender
