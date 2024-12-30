import React, { useState,useContext,useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
const BookSedule = ({doctorDetail}) => {

    const params= useParams();

    const Context = useContext(AuthContext);
    const { GetAvialbeDateForDoctor,GetAvialbeTimeDateAndForDoctor } = Context;
    const doctorId = params.id;
    const navigate = useNavigate(); 

    const [dates,setDates] = useState([]);
    const [timeSlots,setTimeSlots] = useState([]);
    const [selectedDate,setSelectedDate] = useState();

    const [filledTimeSlots,setFilledTimeSlots] = useState(["03:00 am","04:00 am"]);
    const [filledDateSlots,setfilledDateSlots] = useState(["2024-12-30"]);

     useEffect(() => {
      nextDays();
         // eslint-disable-next-line
    }, []);

    // Generate an array of the next 14 days
    const nextDays = async ()=> {
      try {
        let res = await GetAvialbeDateForDoctor(doctorId);
        // console.log(res)
        setDates(res);
      } catch (error) {
        
      }
    };

    const onDateChange = (event)=>{
        setSelectedDate(event.target.value);
        console.log(event.target.value);
        console.log(selectedDate);
        GetAvialbeTimeForDate(event.target.value);
    }

    const GetAvialbeTimeForDate = async (date) => {
      try {
       let times = await GetAvialbeTimeDateAndForDoctor(doctorId,date);
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

      console.log(formDataObject);
      navigate('/patientsAppointmentDetail',{state:{...formDataObject,doctorDetail}});
    };

  return (
    <>
      <form  onSubmit={handleSubmit} className='BookSedule-container p-2 potion-relative'>
        
        {/* Sedule Date */}
        <section className='SeduleDate my-4'>
            <small><p className='fw-bold'>Date</p></small>
            <div className='row g-2'>
               {dates?.map((day,index)=>

                <div className='col-3' key={index}>
                <div className={`btn btn-outline-info fw-bolder rounded-3 d-flex flex-column justify-content-center calandar-day cursor-pointer ${filledDateSlots.includes(day.formattedDate)?'btn-outline-danger cursor-not-allowed':'btn-outline-info cursor-pointer'}`}>
                <label className={`d-flex flex-column align-items-center ${filledDateSlots.includes(day.formattedDate)?'btn-outline-danger cursor-not-allowed':'btn-outline-info cursor-pointer'}`} htmlFor={"day"+day.formattedDate}>
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
               {timeSlots?.map((e)=>
                <div className='col-4'>
                    <div className={`btn fw-bolder rounded-3 d-flex flex-column justify-content-center calandar-time ${!e.isAvailable?'btn-outline-danger cursor-not-allowed':'btn-outline-info cursor-pointer'}`}>
                    <label className={`d-flex align-items-center cursor-pointer justify-content-center ${!e.isAvailable?'btn-outline-danger cursor-not-allowed':'btn-outline-info cursor-pointer'}`}>
                    <input 
                    type="radio" 
                    name="time" 
                    value={e.time}
                    disabled={!e.isAvailable}
                    className="visually-hidden" 
                    />  
                        <p className='m-0 text-center text-uppercase'>{e.time}</p>
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
