import React from 'react'
import { useLocation } from 'react-router-dom';

const PatientDetailAfterBook = () => {

    let location = useLocation();
    const AppointmentsDetails = location.state;
    const UserRole = localStorage.getItem('UserRole');

    const ConsultionFees = AppointmentsDetails?.consultionFees;
    const vat = 5;
    const VatFess = (ConsultionFees * vat)/100;

  return (
    <>  
        <div className='container-fluid d-flex justify-content-center align-items-center pt-3 pt-md-4'>
            <section className='col-lg-8'>
                <div className='mx-md-1'>
                {/* DoctorDetail-left-container  */}

                    {UserRole === 'patient' ? 
                        <section className='DoctorDetail-Banner'>
                            <div className='px-2 pt-2 border rounded-4 bg-light position-relative'>
                                <img src={`/assets/img/Doctor_5.png`} alt="Doctor" />
                                <div className='position-absolute text-xenter'>
                                    <h5 className='text-capitalize'>Dr. {AppointmentsDetails?.doctorname}</h5>
                                    <p className='text-secondary text-capitalize'>Sr. {AppointmentsDetails?.doctorspecialist}</p>
                                </div>
                            </div>
                        </section> : ""
                    } 

                    {UserRole === 'doctor' ? 
                        <section className='DoctorDetail-Banner'>
                            <div className='px-2 pt-2 border rounded-4 bg-light position-relative'>
                                <img src={`/assets/img/Patient.png`} alt="Doctor" />
                                <div className='position-absolute text-xenter'>
                                    <h5 className='text-capitalize'>{AppointmentsDetails?.patientname}</h5>
                                    <p className='text-secondary text-capitalize'>Sr. {AppointmentsDetails?.problem}</p>
                                </div>
                            </div>
                        </section> : ""
                    } 

                            {/* <!-- Form --> */}
                            <form className='AppointmentBill-form py-3'>
                                <div className='row'>  
                                    <div className='col-md-6'>
                                        <div className="mb-3">
                                            <div className='border p-3 rounded-3 shadow-sm AppointmentBill-Patientdetails'>
                                                <h6>Fee details :</h6>
                                                <div className='d-flex justify-content-between text-secondary'>
                                                    <p className='m-1'>Consultion Fees</p> 
                                                    <p className='m-1'>${ConsultionFees}</p>
                                                </div> 
                                                <div className='d-flex justify-content-between text-secondary'>
                                                    <p className='m-1'>Vat <span>(5%)</span></p> 
                                                    <p className='m-1'>${VatFess}</p>
                                                </div>
                                                <div className='d-flex justify-content-between text-secondary'>
                                                    <p className="m-1" >Total</p>
                                                    <p className='m-1'>${ConsultionFees + VatFess}</p>
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
                                                        <p className='m-1 text-capitalize'>: {AppointmentsDetails?.patientname}</p>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <p className="m-1 w-25">Age</p>
                                                        <p className='m-1'>: {AppointmentsDetails?.age}</p>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <p className="m-1 w-25">Weight </p>
                                                        <p className='m-1'>: {AppointmentsDetails?.weight}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <div className="mb-3">
                                            <div className='border p-3 rounded-3 shadow-sm AppointmentBill-payment'>
                                                <h5>Visit Time</h5>
                                                { AppointmentsDetails?.status === "Missed" ?
                                                 <p className='text-danger'><i className="fa-solid fa-circle-exclamation"></i> You missed your scheduled appointment. Please reschedule at your earliest convenience to ensure timely care.</p> :""
                                                 } 
                                                <div className="text-secondary" >
                                                    <div className='d-flex'>
                                                        <p className="m-1 w-25">Day</p>
                                                        <p className='m-1'>: {new Date(AppointmentsDetails?.date).toLocaleDateString('en-IN',{timeZone: 'Asia/Kolkata',})}</p>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <p className="m-1 w-25">Time</p>
                                                        <p className='m-1 text-capitalize'>: {AppointmentsDetails?.time}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <div className="mb-3">
                                            <div className=' AppointmentBill-payment'>
                                            { AppointmentsDetails?.status === "Missed" ?
                                                <button className="btn btn-danger text-white" >Reschedile Appointment</button> :""
                                             } 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                    
                 
                </div>
            </section>
        </div>
    </>
  )
}

export default PatientDetailAfterBook
