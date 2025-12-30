import React from 'react'
import { useLocation } from 'react-router-dom';
import ReSeduleCalender from './RescheduleCalenders';
import OptimizedImage from './OptimizedImage';

const PatientDetailAfterBook = () => {

    let location = useLocation();
    const AppointmentsDetails = location.state;
    const UserRole = localStorage.getItem('UserRole');

    const ConsultionFees = AppointmentsDetails?.consultionFees;
    const vat = 5;
    const VatFess = (ConsultionFees * vat) / 100;

    console.log(AppointmentsDetails)

    return (
        <>
            <div className='container-fluid d-flex justify-content-center align-items-center pt-3 pt-md-4'>
                <section className='col-lg-8'>
                    <div className='mx-md-1'>
                        {/* DoctorDetail-left-container  */}

                        {UserRole === 'patient' ?
                            <section className='DoctorDetail-Banner mb-4'>
                                <div className='p-3 premium-card border-0 position-relative overflow-hidden' style={{ background: 'var(--secondary-gradient)', minHeight: '180px' }}>
                                    <OptimizedImage
                                        src={`/assets/img/Doctor_${(AppointmentsDetails?.doctorImageIndex ?? 5) + 1}.png`}
                                        style={{ height: '180px', borderRadius: '1rem' }}
                                        imageStyle={{ height: '180px', borderRadius: '1rem' }}
                                        alt="Doctor"
                                    />
                                    <div className='position-absolute text-center glass-effect p-2 rounded-3 shadow-sm' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: '200px' }}>
                                        <h5 className='m-0 fw-bold' style={{ color: '#2d3436' }}>Dr. {AppointmentsDetails?.doctorname}</h5>
                                        <p className='text-primary fw-bold text-uppercase m-0' style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>{AppointmentsDetails?.doctorspecialist}</p>
                                    </div>
                                </div>
                            </section> : ""
                        }

                        {UserRole === 'doctor' ?
                            <section className='DoctorDetail-Banner mb-4'>
                                <div className='p-3 premium-card border-0 position-relative overflow-hidden' style={{ background: 'var(--secondary-gradient)', minHeight: '180px' }}>
                                    <OptimizedImage
                                        src={`/assets/img/Patient.png`}
                                        style={{ height: '180px', borderRadius: '1rem' }}
                                        imageStyle={{ height: '180px', borderRadius: '1rem' }}
                                        alt="Patient"
                                    />
                                    <div className='position-absolute text-center glass-effect p-2 rounded-3 shadow-sm' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: '200px' }}>
                                        <h5 className='m-0 fw-bold' style={{ color: '#2d3436' }}>{AppointmentsDetails?.patientname}</h5>
                                        <p className='text-primary fw-bold text-uppercase m-0' style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>{AppointmentsDetails?.problem}</p>
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
                                            {AppointmentsDetails?.status === "Missed" ?
                                                <p className='text-danger'><i className="fa-solid fa-circle-exclamation"></i>
                                                    {UserRole === 'patient' ?
                                                        <span> You missed your scheduled appointment. Please reschedule at your earliest convenience to ensure timely care.</span> :
                                                        <span className='text-capitalize'> <span className='text-capitalize'>{AppointmentsDetails?.patientname}</span> missed  scheduled appointment.</span>
                                                    } </p> : ""
                                            }
                                            <div className="text-secondary" >
                                                <div className='d-flex'>
                                                    <p className="m-1 w-25">Day</p>
                                                    <p className='m-1'>: {new Date(AppointmentsDetails?.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', })}</p>
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
                                        {UserRole === 'patient' ?
                                            <div className=' AppointmentBill-payment'>
                                                {AppointmentsDetails?.status === "Missed" ?
                                                    <button type='button' className="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#RescheduleModal" >Reschedule Appointment</button> : ""
                                                }
                                            </div> : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        </form>

                        <ReSeduleCalender AppointmentsDetails={AppointmentsDetails} />

                    </div>
                </section>
            </div>
        </>
    )
}

export default PatientDetailAfterBook
