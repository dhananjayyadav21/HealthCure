import React from 'react'
import Appointmentcard from './Appointmentcard'
import { useLocation } from 'react-router'

const Reschedule = (props) => {
  let location = useLocation()
  const appointmentId = new URLSearchParams(location.search).get("appointmentId");
  console.log(appointmentId);

  let Missed = [{},{}]

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
                              {[{id:1},{id:2},{id:3},{id:4},{id:4}].map((ap)=>{
                              return <Appointmentcard appointment={ap} /> })}  
                            </div>
                          </div>
                      </div>
                 </div> 
             </section>

            {appointmentId &&  <section className='col-md-7 Reschedule-Right-container' key={appointmentId}>
                 <div className='mx-md-1'>
                   {/* DoctorDetail-left-container  */}
                    <section className='DoctorDetail-left-container potion-relative'>
                        <section className='DoctorDetail-Banner'>
                            <div className='w-100 px-2 pt-2 border rounded-4 bg-white position-relative'>
                                <img src={`assets/img/Doctor_${appointmentId}.png`} alt="Doctor" />
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
                                            <p className='text-danger'><i class="fa-solid fa-circle-exclamation"></i> You missed your scheduled appointment. Please reschedule at your earliest convenience to ensure timely care.</p>
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

                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <div className=' AppointmentBill-payment bg-light'>
                                           <button className="btn btn-danger text-white" >Reschedile Appointment</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                          </form>
                        </section>
                    </section> 
                 </div>
             </section>}
        </div>
      </div> 

        <section>      
          {/* <!-- Modal --> */}
          <div class="modal fade" id="RescheduleAppointment" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="RescheduleAppointmentLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="RescheduleAppointmentLabel">Reschedule</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  
                  {/* Sedule Date */}
                    <section className='SeduleDate my-4'>
                        <small><p className='fw-bold'>December</p></small>
                        <div className='row g-2'>
                          {Missed.map((e)=>
                            <div className='col-3'>
                                <div className='btn btn-outline-info fw-bolder rounded-3 d-flex flex-column justify-content-center'>
                                <p className='m-0'>Mon</p>
                                <p className='m-0'>10</p>
                                </div>
                            </div> )} 
                        </div>
                    </section>

                    {/* Morning Slots */}
                    <section className='MorningSlots my-4'>
                        <small><p className='fw-bold'>Morning Slots</p></small>
                        <div className='row g-2'>
                          {Missed.map((e)=>
                            <div className='col-4'>
                                <div className='btn btn-outline-info rounded-3 d-flex justify-content-center'>
                                    <p className='m-0'>10:30</p>
                                    <p className='m-0'>Am</p>
                                </div>
                            </div> )} 
                        </div>
                    </section>

                    {/* Afternoon Slots */}
                    <section className='AfternoonSlots my-4'>
                        <small><p className='fw-bold'>Afternoon Slots</p></small>
                        <div className='row g-2'>
                          {Missed.map((e)=>
                            <div className='col-4'>
                                <div className='btn btn-outline-info rounded-3 d-flex justify-content-center'>
                                    <p className='m-0'>01:30</p>
                                    <p className='m-0'>Pm</p>
                                </div>
                            </div> )} 
                        </div>
                    </section>

                    {/* Evening Slots */}
                    <section className='EveningSlots my-4'>
                        <small><p className='fw-bold'>Evening Slots</p></small>
                        <div className='row g-2'>
                        {Missed.map((e)=>
                            <div className='col-4'>
                                <div className='btn btn-outline-info rounded-3 d-flex justify-content-center'>
                                    <p className='m-0'>7:30</p>
                                    <p className='m-0'>Pm</p>
                                </div>
                            </div> )} 
                        </div>
                    </section>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
                  <button type="button" class="btn btn-primary">Update</button>
                </div>
              </div>
            </div>
          </div>
        </section>  


    </>
  )
}

export default Reschedule
