import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
const BookSchedule = ({ doctorDetail, doctorImageIndex }) => {

  const params = useParams();

  const Context = useContext(AuthContext);
  const { GetAvialbeDateForDoctor, GetAvialbeTimeDateAndForDoctor } = Context;
  const doctorId = params.id;
  const navigate = useNavigate();

  const [dates, setDates] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  // eslint-disable-next-line 
  const [selectedDate, setSelectedDate] = useState();

  useEffect(() => {
    nextDays();
    // eslint-disable-next-line
  }, []);

  // Generate an array of the next 14 days
  const nextDays = async () => {
    try {
      let res = await GetAvialbeDateForDoctor(doctorId);
      // console.log(res)
      setDates(res);
    } catch (error) {

    }
  };

  const onDateChange = (event) => {
    setSelectedDate(event.target.value);
    GetAvialbeTimeForDate(event.target.value);
  }

  const GetAvialbeTimeForDate = async (date) => {
    try {
      let times = await GetAvialbeTimeDateAndForDoctor(doctorId, date);
      setTimeSlots(times);
    } catch (error) {

    }
  };

  // let date = nextDays();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Target Form
    const formData = new FormData(event.target);
    // Each form name and value store as kye,value
    const formDataObject = {};
    formData.forEach((value, key) => {
      if (formDataObject[key] != null) {
        if (!Array.isArray(formDataObject[key])) {
          let newValueArray = [];
          newValueArray.push(formDataObject[key]);
          newValueArray.push(value);
          formDataObject[key] = newValueArray;
        } else {
          formDataObject[key].push(value);
        }
      } else {
        formDataObject[key] = value;
      }
    });

    formDataObject["doctorId"] = doctorId;
    navigate('/patientsAppointmentDetail', { state: { ...formDataObject, doctorDetail, doctorImageIndex } });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='BookSchedule-container p-0 position-relative'>

        {/* Shedule Date */}
        <section className='SeduleDate mb-4'>
          <p className='fw-bold mb-3 small text-uppercase opacity-75' style={{ letterSpacing: '1px' }}>Select Preferred Date</p>
          <div className='row g-2'>
            {dates?.map((day, index) =>
              <div className='col-3' key={index}>
                <div className='position-relative h-100'>
                  <input
                    type="radio"
                    name="day"
                    id={"day" + day.formattedDate}
                    value={day.formattedDate}
                    onChange={onDateChange}
                    className="btn-check"
                    required
                  />
                  <label
                    htmlFor={"day" + day.formattedDate}
                    className="btn btn-outline-info w-100 h-100 p-2 d-flex flex-column align-items-center justify-content-center rounded-3 border-2 transition-smooth"
                  >
                    <span className='m-0 text-uppercase fw-bold opacity-75' style={{ fontSize: '0.6rem' }}>{day.dayName.substring(0, 3)}</span>
                    <span className='h5 m-0 fw-bold'>{new Date(day.formattedDate).getDate()}</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Time Slots */}
        <section className='MorningSlots mb-4'>
          <p className='fw-bold mb-3 small text-uppercase opacity-75' style={{ letterSpacing: '1px' }}>Available Time Slots</p>
          {timeSlots.length === 0 ? (
            <div className="text-center py-4 bg-light rounded-4 opacity-50 border-dashed">
              <i className="fa-solid fa-calendar-day mb-2 d-block opacity-50"></i>
              <small className="fw-medium">Choose a date to see available slots</small>
            </div>
          ) : (
            <div className='row g-2'>
              {timeSlots?.map((e, index) =>
                <div className='col-4' key={index}>
                  <div className='position-relative h-100'>
                    <input
                      type="radio"
                      name="time"
                      id={"time" + index}
                      value={e.time}
                      disabled={!e.isAvailable}
                      className="btn-check"
                      required
                    />
                    <label
                      htmlFor={"time" + index}
                      className={`btn w-100 p-2 rounded-3 border-2 transition-smooth small fw-bold ${!e.isAvailable ? 'btn-outline-secondary opacity-25 cursor-not-allowed' : 'btn-outline-primary'}`}
                      title={!e.isAvailable ? "Not Available" : "Available"}
                    >
                      {e.time}
                    </label>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        <div className='mt-4'>
          <button className='btn w-100 text-white fw-bold py-3 rounded-pill shadow-sm transition-smooth btn-primary-gradient border-0' style={{ background: 'var(--primary-gradient)' }} type="submit">
            <i className="fa-solid fa-calendar-check me-2"></i>Confirm Appointment
          </button>
        </div>

      </form>
    </>
  )
}

export default BookSchedule
