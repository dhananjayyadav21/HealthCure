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

        {/* Sedule Date */}
        <section className='SeduleDate my-4'>
          <small><p className='fw-bold'>Date</p></small>
          <div className='row g-3'>
            {dates?.map((day, index) =>
              <div className='col-3' key={index}>
                <div className='position-relative h-100'>
                  <input
                    type="radio"
                    name="day"
                    id={"day" + day.formattedDate}
                    value={day.formattedDate}
                    onChange={onDateChange}
                    className="visually-hidden"
                    required
                  />
                  <label
                    htmlFor={"day" + day.formattedDate}
                    className="premium-card d-flex flex-column align-items-center justify-content-center p-2 cursor-pointer w-100 transition-smooth"
                    style={{
                      border: '1.5px solid rgba(0,0,0,0.05)',
                      backgroundColor: 'white'
                    }}
                  >
                    <p className='m-0 text-uppercase fw-bold text-secondary' style={{ fontSize: '0.65rem' }}>{day.dayName.substring(0, 3)}</p>
                    <p className='m-0 fw-bold' style={{ fontSize: '1.1rem' }}>{new Date(day.formattedDate).getDate()}</p>
                  </label>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Morning Slots */}
        <section className='MorningSlots my-4'>
          <small><p className='fw-bold'>Time Slots</p></small>
          <div className='row g-3'>
            {timeSlots?.map((e, index) =>
              <div className='col-4' key={index}>
                <div className='position-relative h-100'>
                  <input
                    type="radio"
                    name="time"
                    id={"time" + index}
                    value={e.time}
                    disabled={!e.isAvailable}
                    className="visually-hidden"
                    required
                  />
                  <label
                    htmlFor={"time" + index}
                    className={`premium-card d-flex align-items-center justify-content-center p-2 transition-smooth w-100 ${!e.isAvailable ? 'opacity-25 grayscale cursor-not-allowed shadow-none' : 'cursor-pointer'}`}
                    style={{
                      border: '1.5px solid rgba(0,0,0,0.05)',
                      backgroundColor: 'white'
                    }}
                    title={!e.isAvailable ? "Not Available" : "Available"}
                  >
                    <p className='m-0 text-center fw-bold text-uppercase' style={{ fontSize: '0.8rem' }}>{e.time}</p>
                  </label>
                </div>
              </div>
            )}
          </div>
        </section>

        <div className='mt-4'>
          <button className='btn w-100 text-white fw-bold py-3 rounded-4 shadow-sm transition-smooth' style={{ background: 'var(--primary-gradient)', border: 'none' }} type="submit">
            Confirm Appointment
          </button>
        </div>

      </form>
    </>
  )
}

export default BookSchedule
