import React from 'react'

const Reschedule = () => {

  let Missed = [{},{}]

  return (
    <>
      <div className=''>
        <section className='col-md-4'>
         {/* Missed Appointment */}
         <section className={`m-4`}>
            <div className=' bg-light p-1 py-3 rounded-4'>
                <div className='d-flex justify-content-center align-items-center gap-3 px-2'>
                  <span className='btn btn-danger rounded-circle p-1 m-0'></span>
                  <h5 className='m-0'>Reschedule</h5> 
                </div>
                <div className='px-3'>
                    <hr /> 
                </div>
                <div className='Missed-Appointment scrollable'>
                  <div className='px-2'>
                    {Missed.map(()=>
                     <div className='d-flex align-items-center bg-white shadow-sm gap-2 gap-md-3 p-1 p-md-2 rounded-3 my-2'>
                        <div className='Appointmentcard-img-container bg-light rounded-3'>
                            <img src="assets/img/Doctor_1.png" alt="doctor"/>
                        </div>
                        <div className='w-100'>
                            <div className='d-flex justify-content-between align-items-center'>
                              <div className='my-2'>
                                  <h6 className='m-0'>Dr. Doctor Name</h6>
                                  <p className='text-secondary m-0'>Dentist</p>
                              </div>
                              <div>
                                <i class="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#RescheduleAppointment"></i>
                              </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                              <p className='text-secondary m-0'>5 Dec 2023</p>
                              <p className='badge bg-info rounded-5 m-0'>Status</p>
                            </div>
                        </div>
                      </div>)} 
                  </div>
                </div>
            </div>
          </section>
        </section>



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

      </div> 

    </>
  )
}

export default Reschedule
