import React, { useState, useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
const ReSeduleCalender = ({ AppointmentsDetails }) => {

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
    formDataObject["doctorid"] = AppointmentsDetails?.doctorid;

    //---- Reschedule Appointment
    const res = await rescheduleAppointment(formDataObject);
    if (res?.success === true) {
      refClose.current.click();
      navigate('/');
      alert(`${res?.message}`)
    } else {
      alert('Somthing went wrong!, please try again');
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
            <div className="modal-content glass-effect border-0 rounded-4 shadow-lg overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold" id="RescheduleModalLabel" style={{ color: '#2d3436' }}>
                  <i className="fa-solid fa-calendar-check me-2 text-primary"></i>Reschedule Appointment
                </h5>
                <button
                  type="button"
                  className="btn-close shadow-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-4">
                <form
                  onSubmit={handleSubmit}
                  className="BookSchedule-container position-relative"
                  id="RescheduleForm"
                >
                  {/* Schedule Date */}
                  <section className="SeduleDate mb-4">
                    <p className="fw-bold mb-3 small text-uppercase opacity-75" style={{ letterSpacing: '1px' }}>Select New Date</p>
                    <div className="row g-2">
                      {dates?.map((day, index) => (
                        <div className="col-3" key={index}>
                          <div className="position-relative h-100">
                            <input
                              type="radio"
                              name="date"
                              id={"date" + day.formattedDate}
                              value={day.formattedDate}
                              onChange={onDateChange}
                              className="btn-check"
                              required
                            />
                            <label
                              className={`btn btn-outline-info w-100 h-100 p-2 d-flex flex-column align-items-center justify-content-center rounded-3 border-2 transition-smooth`}
                              htmlFor={"date" + day.formattedDate}
                              style={{ fontSize: '0.8rem' }}
                            >
                              <span className="opacity-75">{day.dayName.substring(0, 3)}</span>
                              <span className="h5 m-0 fw-bold">{new Date(day.formattedDate).getDate()}</span>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Time Slots */}
                  <section className="MorningSlots mb-2">
                    <p className="fw-bold mb-3 small text-uppercase opacity-75" style={{ letterSpacing: '1px' }}>Available Time Slots</p>
                    {timeSlots.length === 0 ? (
                      <div className="text-center py-3 bg-light rounded-3 opacity-50">
                        <small>Please select a date first</small>
                      </div>
                    ) : (
                      <div className="row g-2">
                        {timeSlots?.map((e, idx) => (
                          <div className="col-4" key={idx}>
                            <div className="position-relative h-100">
                              <input
                                type="radio"
                                name="time"
                                id={"time" + e.time}
                                value={e.time}
                                disabled={!e.isAvailable}
                                onChange={OnChange}
                                className="btn-check"
                                required
                              />
                              <label
                                className={`btn w-100 p-2 rounded-3 border-2 transition-smooth small fw-bold ${!e.isAvailable
                                    ? "btn-outline-secondary opacity-25 cursor-not-allowed"
                                    : "btn-outline-primary"
                                  }`}
                                htmlFor={"time" + e.time}
                                title={!e.isAvailable ? "Not Available" : "Available"}
                              >
                                {e.time}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                </form>
              </div>
              <div className="modal-footer border-0 pt-0 gap-2">
                <button
                  type="button"
                  className="btn btn-light rounded-pill px-4 fw-bold text-secondary"
                  data-bs-dismiss="modal"
                  ref={refClose}
                >
                  Close
                </button>
                <button
                  type="submit"
                  form="RescheduleForm"
                  className="btn btn-primary-gradient border-0 rounded-pill px-4 fw-bold shadow-sm"
                  style={{ background: 'var(--primary-gradient)' }}
                >
                  Confirm New Schedule
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
