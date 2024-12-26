import React from 'react'
import { useLocation } from 'react-router-dom';

const PatientDetailAfterBook = () => {

    let location = useLocation();
    const appointmentId = new URLSearchParams(location.search).get(":");
    console.log(appointmentId);

  return (
    <>  
        <div className='container-fluid d-flex justify-content-center align-items-center pt-2 pt-md-4'>
            <section className='col-md-7 Reschedule-Right-container'>
                <div className='mx-md-1'>
                {/* DoctorDetail-left-container  */}
                    <section className='DoctorDetail-left-container potion-relative'>
                        <section className='DoctorDetail-Banner'>
                            <div className='w-100 px-2 pt-2 border rounded-4 bg-light position-relative'>
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
                                            <div className='border p-3 rounded-3 shadow-sm AppointmentBill-Patientdetails'>
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
                                            <div className='border p-3 rounded-3 shadow-sm AppointmentBill-Patientdetails'>
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
                                            <div className='border p-3 rounded-3 shadow-sm AppointmentBill-payment'>
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

                                    <div className='col-md-6'>
                                        <div className="mb-3">
                                            <div className=' AppointmentBill-payment'>
                                                <button className="btn btn-danger text-white" >Reschedile Appointment</button>
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
    </>
  )
}

export default PatientDetailAfterBook
