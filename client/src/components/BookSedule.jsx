import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const BookSedule = ({doctorDetail}) => {

    const params= useParams();
    const currentDate = new Date();
    const navigate = useNavigate(); 

    const [selectedDate,setSelectedDate] = useState();
    const [timeSlots,setTimeSlots] = useState([]);
    const [filledTimeSlots,setFilledTimeSlots] = useState(["03:00 am","04:00 am"]);
    const [filledDateSlots,setfilledDateSlots] = useState(["2024-12-31"]);

    // Generate an array of the next 14 days
    const nextDays = (n)=> Array.from({ length: n }, (_, index) => {
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + index + 1);
        
        // Format as "DayName, YYYY-MM-DD"
        const dayName = nextDay.toLocaleDateString('en-US', { weekday: 'long' });
        const formattedDate = nextDay.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    
        return { dayName, formattedDate };
    });

    const onDateChange = (event)=>{
        setSelectedDate(event.target.value);
        console.log(event.target.value);
        console.log(selectedDate);
        setTimeSlots(generateTimeIntervals(event.target.value));
    }

    const generateTimeIntervals = (date) => {
        const currentDate = new Date();
    
        // Define the start and end times (10:00 AM to 2:00 PM)
        const startHour = 1; // 10 AM
        const endHour = 5; // 2 PM
    
        // Parse the selected date and set the time to start at 10 AM
        const selectedDateObj = new Date(date);
        selectedDateObj.setHours(startHour, 0, 0, 0); // Set the start time to 10:00 AM
    
        const availableIntervals = [];
    
        // Loop through and add 30-minute intervals
        while (selectedDateObj.getHours() < endHour) {
          const timeString = selectedDateObj.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });
    
          // Add interval if it hasn't passed yet
          if (selectedDateObj > currentDate) {
            availableIntervals.push(timeString);
          }
    
          // Increment by 30 minutes
          selectedDateObj.setMinutes(selectedDateObj.getMinutes() + 30);
        }
    
        return availableIntervals;
    };
    
    let date = nextDays(14);
    
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

      const doctorId = params.id;
      formDataObject["doctorId"] = doctorId;

      console.log(formDataObject);
      navigate('/patientsAppointmentDetail',{state:{...formDataObject,doctorDetail}});
    };

  return (
    <>
      <form  onSubmit={handleSubmit} className='BookSedule-container p-2 potion-relative'>
        
        {/* Sedule Date */}
        <section className='SeduleDate my-4'>
            <small><p className='fw-bold'>December</p></small>
            <div className='row g-2'>
               {date.map((day,index)=>

                <div className='col-3'>
                <div className={`btn btn-outline-info fw-bolder rounded-3 d-flex flex-column justify-content-center calandar-day cursor-pointer ${filledDateSlots.includes(day.formattedDate)?'btn-outline-danger cursor-not-allowed':'btn-outline-info cursor-pointer'}`}>
                <label className={`d-flex flex-column align-items-center ${filledDateSlots.includes(day.formattedDate)?'btn-outline-danger cursor-not-allowed':'btn-outline-info cursor-pointer'}`} for={"day"+day.formattedDate}>
                    <input 
                    type="radio" 
                    name="day" 
                    id={"day"+day.formattedDate}
                    value={day.formattedDate}
                    onChange={onDateChange}
                    disabled={filledDateSlots.includes(day.formattedDate)}
                    className="visually-hidden cursor-pointer" 
                    />
                    <p className='m-0 text-uppercase'>{day.dayName.substring(0,3)}</p>
                    <p className='m-0'>{new Date(day.formattedDate).getDate()}</p>
                </label>
                </div>
                </div>
            )} 
            </div>
        </section>

        {/* Morning Slots */}
        <section className='MorningSlots my-4'>
            <small><p className='fw-bold'>Time Slots</p></small>
            <div className='row g-2'>
               {timeSlots.map((e)=>
                <div className='col-4'>
                    <div className={`btn fw-bolder rounded-3 d-flex flex-column justify-content-center calandar-time ${filledTimeSlots.includes(e)?'btn-outline-danger cursor-not-allowed':'btn-outline-info cursor-pointer'}`}>
                    <label className={`d-flex align-items-center cursor-pointer justify-content-center ${filledTimeSlots.includes(e)?'btn-outline-danger cursor-not-allowed':'btn-outline-info cursor-pointer'}`}>
                    <input 
                    type="radio" 
                    name="time" 
                    value={e}
                    disabled={filledTimeSlots.includes(e)}
                    className="visually-hidden" 
                    />  
                        <p className='m-0 text-center text-uppercase'>{e}</p>
                       </label> 
                    </div>
                </div> )} 
            </div>
        </section>

        <div>
            {/* <Link className='btn btn-warning btn-RequestAppointment text-white fw-sm-bold my-3' 
            to={{
                pathname: '/patientsAppointmentDetail',
                state:{id:1,name:'sabaoon'}
              }} 
            >Request for Appointment</Link> */}
            <button  className='btn btn-warning btn-RequestAppointment text-white fw-sm-bold my-3' to="/patientsAppointmentDetail" type="submit">Request for Appointment</button>
        </div>

      </form>
    </>
  )
}

export default BookSedule
