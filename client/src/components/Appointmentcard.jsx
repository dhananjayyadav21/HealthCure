import React from 'react'
import { useNavigate } from 'react-router-dom'

const Appointmentcard = (props) => {

  const {index, Appointments} = props ;
  const navigate = useNavigate(); 
  
  const ShowAppointmentDetails = ()=>{
    navigate(`/patientDetailAfterBook/:${index}`, {state:{...Appointments}});
  }
  return (
    <>
        <div className='d-flex align-items-center bg-white shadow-sm gap-2 gap-md-3 p-1 p-md-2 rounded-3 my-2 cursor-pointer' onClick= {ShowAppointmentDetails}>

          { localStorage.getItem('UserRole') === "patient" ? <>
              <div className='Appointmentcard-img-container bg-light rounded-3'>
                  <img src={`/assets/img/Doctor_${index+1}.png`} alt="doctor"/>
              </div>
              <div className='w-100'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='my-2'>
                        <h6 className='m-0'>Dr. {Appointments?.doctorname}</h6>
                        <p className='text-secondary m-0'>{Appointments?.doctorspecialist}</p>
                    </div>
                    <div>
                        <img src="/assets/img/Doctorr.png" alt="Call"  style={{width:"30px"}}/>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='text-secondary m-0'>{new Date(Appointments?.date).toLocaleDateString('en-IN',{timeZone: 'Asia/Kolkata',})}</p>
                    <p className='badge bg-info rounded-5 m-0'>{Appointments?.status }</p>
                  </div>
              </div></> : "" 
          }

          { localStorage.getItem('UserRole') === "doctor" ? <>
              <div className='Appointmentcard-img-container bg-light rounded-3'>
                  <img src={`/assets/img/Doctor_${index+1}.png`} alt="doctor"/>
              </div>
              <div className='w-100'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='my-2'>
                        <h6 className='m-0 text-capitalize'>{Appointments?.patientname}</h6>
                        <p className='text-secondary text-capitalize m-0'>{Appointments?.problem}</p>
                    </div>
                    <div>
                      {Appointments?.status === "Scheduled" ? 
                        <p className='badge bg-success rounded-5 m-0'>Complete</p> :
                        <img src="/assets/img/Doctorr.png" alt="Call"  style={{width:"30px"}}/>
                      }
                    </div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='text-secondary m-0'>{new Date(Appointments?.date).toLocaleDateString('en-IN',{timeZone: 'Asia/Kolkata',})}</p>
                    {Appointments?.status === "Scheduled" ? 
                        <p className='badge bg-danger  rounded-5 m-0'>Missed</p> :
                        <p className='badge bg-info rounded-5 m-0'>{Appointments?.status }</p> 
                    }
                  </div>
              </div></> : "" 
          }    

        </div>
    </>
  )
}

export default Appointmentcard
