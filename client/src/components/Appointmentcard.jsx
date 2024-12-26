import React from 'react'
import { useNavigate } from 'react-router-dom'

const Appointmentcard = (props) => {

  const {index} = props ;
  const navigate = useNavigate(); 

  const ShowAppointmentDetails = ()=>{
    navigate(`/patientDetailAfterBook/:${index}`);
  }
  return (
    <>
        <div className='d-flex align-items-center bg-white shadow-sm gap-2 gap-md-3 p-1 p-md-2 rounded-3 my-2 cursor-pointer' onClick= {ShowAppointmentDetails}>
           <div className='Appointmentcard-img-container bg-light rounded-3'>
              <img src={`/assets/img/Doctor_${index+1}.png`} alt="doctor"/>
           </div>
           <div className='w-100'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='my-2'>
                    <h6 className='m-0'>Dr. Doctor Name</h6>
                    <p className='text-secondary m-0'>Dentist</p>
                </div>
                <div>
                    <img src="/assets/img/Doctorr.png" alt="Call"  style={{width:"30px"}}/>
                </div>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='text-secondary m-0'>5 Dec 2023</p>
                <p className='badge bg-info rounded-5 m-0'>Status</p>
              </div>
           </div>
        </div>
    </>
  )
}

export default Appointmentcard
