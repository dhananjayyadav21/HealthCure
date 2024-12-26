import React from 'react'
import Appointmentcard from '../components/Appointmentcard'
import { useLocation } from 'react-router'

const Reschedule = () => {
  let location = useLocation()
  const appointmentId = new URLSearchParams(location.search).get("appointmentId");
  console.log(appointmentId);

  return (
    <>
      <div className='container-fluid py-3 bg-light'>
        <div className='row'>
             
             <section className='col-md-5 Reschedule-left-container'>
                 <div className='mx-md-1'>
                    {/* Reschedule Appointment */}
                      <div className='p-1'>
                          <div className={`d-flex justify-content-center align-items-center gap-3 m-2 py-2 bg-white rounded-2 border`}>
                            <span className='btn btn-danger rounded-circle p-1 m-0'></span>
                            <h6 className='m-0'>Reschedule Appointment</h6> 
                          </div>
        
                          <div className='Missed-Appointment scrollable '>
                            <div className='px-2'>
                              {[{id:1},{id:2},{id:3},{id:4},{id:4}].map((e,index)=>{
                              let currentindex = index % 10
                              return  <Appointmentcard key={index} index={currentindex}/> })}  
                            </div>
                          </div>
                      </div>
                 </div> 
             </section>

            <section className='col-md-7 Reschedule-Right-container d-none d-md-flex' key={appointmentId}>
                 <div className='mx-md-1'>
                   {/* DoctorDetail-left-container  */}
                    <section className='DoctorDetail-left-container potion-relative'>
                        <section className='DoctorDetail-Banner'>
                            <div className='w-100 px-2 pt-2 border rounded-4 bg-white position-relative'>
                                <img src={`/assets/img/Doctor_5.png`} alt="Doctor" />
                                <div className='position-absolute text-xenter'>
                                    <h5>Dr. Cyden Stack</h5>
                                    <p className='text-secondary'>Sr. Dental Specialist</p>
                                </div>
                            </div>
                        </section>

                        <section className='DoctorDetail-Name d-flex justify-content-between align-items-center my-2'>
                          {/* <!-- Form --> */}
                          <form className='AppointmentBill-form'>
                            <div className='row'>  
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <div className='border p-3 rounded-3 AppointmentBill-Patientdetails'>
                                            <h6>Fee details :</h6>
                                            <div className='d-flex justify-content-between text-secondary'>
                                                <p className='m-1'>Consultion Fees</p> 
                                                <p className='m-1'>$55</p>
                                            </div> 
                                            <div className='d-flex justify-content-between text-secondary'>
                                                <p className='m-1'>Vat <span>(5%)</span></p> 
                                                <p className='m-1'>$4.5</p>
                                            </div>
                                            <div className='d-flex justify-content-between text-secondary'>
                                                <p className="m-1" >Total</p>
                                                <p className='m-1'>$59.5</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <div className='border p-3 rounded-3 AppointmentBill-Patientdetails'>
                                            <h6>Patient info:</h6>
                                            <div className="text-secondary" >
                                              <div className='d-flex'>
                                                  <p className="m-1 w-25">Name</p>
                                                  <p className='m-1'>: Marko janson</p>
                                              </div>
                                              <div className='d-flex'>
                                                  <p className="m-1 w-25">Age</p>
                                                  <p className='m-1'>: Age janson</p>
                                              </div>
                                              <div className='d-flex'>
                                                  <p className="m-1 w-25">Weight </p>
                                                  <p className='m-1'>: Weight janson</p>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
 
                                <div className='col-12'>
                                    <div className="mb-3">
                                        <div className='border p-3 rounded-3 AppointmentBill-payment'>
                                            <h5>Visit Time</h5>
                                            <p className='text-danger'><i className="fa-solid fa-circle-exclamation"></i> You missed your scheduled appointment. Please reschedule at your earliest convenience to ensure timely care.</p>
                                            <div className="text-secondary" >
                                              <div className='d-flex'>
                                                  <p className="m-1 w-25">Day</p>
                                                  <p className='m-1'>: 10 Dec 2024</p>
                                              </div>
                                              <div className='d-flex'>
                                                  <p className="m-1 w-25">Time</p>
                                                  <p className='m-1'>: Afternoon - 2:00-2:15</p>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                          </form>
                        </section>
                    </section> 
                 </div>
             </section>
        </div>
      </div> 

    </>
  )
}

export default Reschedule
