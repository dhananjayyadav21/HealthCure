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
                                <div className='col-md-6 mb-4'>
                                    <div className="h-100">
                                        <div className='glass-effect p-4 rounded-4 shadow-sm border-0 h-100' style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
                                            <h6 className='fw-bold mb-3' style={{ color: '#2d3436' }}><i className="fa-solid fa-receipt me-2 text-primary"></i>Fee details</h6>
                                            <div className='d-flex justify-content-between text-secondary mb-2'>
                                                <small className='fw-medium'>Consultation Fees</small>
                                                <span className='fw-bold text-dark'>${ConsultionFees}</span>
                                            </div>
                                            <div className='d-flex justify-content-between text-secondary mb-2'>
                                                <small className='fw-medium'>Vat (5%)</small>
                                                <span className='fw-bold text-dark'>${VatFess}</span>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center mt-3 pt-3 border-top'>
                                                <span className="fw-bold text-dark" >Total Amount</span>
                                                <span className='h5 m-0 fw-bold text-primary'>${ConsultionFees + VatFess}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-6 mb-4'>
                                    <div className="h-100">
                                        <div className='glass-effect p-4 rounded-4 shadow-sm border-0 h-100' style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
                                            <h6 className='fw-bold mb-3' style={{ color: '#2d3436' }}><i className="fa-solid fa-user-info me-2 text-primary"></i>Patient info</h6>
                                            <div className="text-secondary" >
                                                <div className='d-flex justify-content-between mb-2'>
                                                    <small className="fw-medium">Name</small>
                                                    <small className='fw-bold text-dark text-capitalize'>{AppointmentsDetails?.patientname}</small>
                                                </div>
                                                <div className='d-flex justify-content-between mb-2'>
                                                    <small className="fw-medium">Age</small>
                                                    <small className='fw-bold text-dark'>{AppointmentsDetails?.age} Years</small>
                                                </div>
                                                <div className='d-flex justify-content-between mb-2'>
                                                    <small className="fw-medium">Weight</small>
                                                    <small className='fw-bold text-dark'>{AppointmentsDetails?.weight} Kg</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-12 mb-4'>
                                    <div className="mb-3">
                                        <div className='glass-effect p-4 rounded-4 shadow-sm border-0' style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
                                            <h5 className='fw-bold mb-3' style={{ color: '#2d3436' }}><i className="fa-solid fa-clock me-2 text-primary"></i>Appointment Schedule</h5>

                                            {AppointmentsDetails?.status === "Missed" &&
                                                <div className='alert alert-danger glass-effect border-0 bg-danger bg-opacity-10 mb-3 px-3 py-2 rounded-3'>
                                                    <small className='fw-bold d-block'>
                                                        <i className="fa-solid fa-circle-exclamation me-2"></i>
                                                        {UserRole === 'patient' ?
                                                            "You missed your scheduled appointment. Please reschedule at your earliest convenience." :
                                                            `${AppointmentsDetails?.patientname} missed the scheduled appointment.`
                                                        }
                                                    </small>
                                                </div>
                                            }

                                            <div className="text-secondary" >
                                                <div className='d-flex justify-content-between mb-2'>
                                                    <small className="fw-medium">Consultation Day</small>
                                                    <small className='fw-bold text-dark'>{new Date(AppointmentsDetails?.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', })}</small>
                                                </div>
                                                <div className='d-flex justify-content-between mb-2'>
                                                    <small className="fw-medium">Scheduled Time</small>
                                                    <small className='fw-bold text-dark text-capitalize'>{AppointmentsDetails?.time}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-12'>
                                    <div className="d-flex justify-content-end">
                                        {UserRole === 'patient' && AppointmentsDetails?.status === "Missed" &&
                                            <button type='button' className="btn btn-primary-gradient border-0 px-4 py-2 rounded-pill fw-bold shadow-sm transition-smooth" style={{ background: 'var(--primary-gradient)' }} data-bs-toggle="modal" data-bs-target="#RescheduleModal" >
                                                <i className="fa-solid fa-calendar-plus me-2"></i>Reschedule Appointment
                                            </button>
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
