import React, { useContext, useEffect, useState } from 'react'
import Appointmentcard from '../components/Appointmentcard'
import AuthContext from '../context/AuthContext'
import { useLocation } from 'react-router'
import OptimizedImage from '../components/OptimizedImage'

const Reschedule = () => {

    let location = useLocation()
    const appointmentId = new URLSearchParams(location.search).get("appointmentId");

    const Context = useContext(AuthContext);
    const { GetAppointments } = Context;

    useEffect(() => {
        GetMissedAppointments("Missed");
        // eslint-disable-next-line
    }, []);

    const [missedAppointments, setMissedAppointments] = useState([]);
    const UserRole = localStorage.getItem("UserRole");

    const ConsultionFees = missedAppointments[0]?.consultionFees;
    const vat = 5;
    const VatFess = (ConsultionFees * vat) / 100;

    const GetMissedAppointments = async (appointmentStatus) => {
        const res = await GetAppointments(appointmentStatus);
        console.log("Missed appointments", res.appointments);
        setMissedAppointments(res.appointments);
    };

    return (
        <>
            <div className='container-fluid py-3' style={{ background: '#f8f9fa', minHeight: '100vh' }}>
                <div className='row'>

                    <section className='col-md-5 Reschedule-left-container'>
                        <div className='mx-md-1'>
                            {/* Reschedule Appointment */}
                            <div className='p-1'>
                                <div className='glass-effect d-flex justify-content-center align-items-center gap-3 m-2 py-3 rounded-4 shadow-sm border-0 position-relative' style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
                                    <span className='p-1 rounded-circle bg-danger shadow-sm' style={{ width: '10px', height: '10px' }}></span>
                                    <h6 className='m-0 fw-bold' style={{ color: '#2d3436' }}>Pending Reschedule</h6>
                                </div>

                                <div className='Missed-Appointment scrollable '>
                                    <div className='px-2'>
                                        {missedAppointments?.map((Appointments, index) => {
                                            let currentindex = index % 10
                                            return <Appointmentcard key={index} index={currentindex} Appointments={Appointments} />
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='col-md-7 Reschedule-Right-container d-none d-md-flex' key={appointmentId}>
                        <div className='mx-md-1'>
                            {/* DoctorDetail-left-container  */}
                            <section className='DoctorDetail-left-container potion-relative'>

                                {UserRole === "patient" ?
                                    <section className='DoctorDetail-Banner col-12 mb-4'>
                                        <div className='w-100 p-3 premium-card border-0 position-relative overflow-hidden' style={{ background: 'var(--secondary-gradient)', minHeight: '180px' }}>
                                            <OptimizedImage src={`/assets/img/Doctor_6.png`} style={{ height: '180px', borderRadius: '1rem' }} imageStyle={{ height: '180px', borderRadius: '1rem' }} objectFit="contain" alt="Doctor" />
                                            <div className='position-absolute text-center glass-effect p-2 rounded-3 shadow-sm' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: '200px' }}>
                                                <h5 className='m-0 fw-bold' style={{ color: '#2d3436' }}>Dr. {missedAppointments[0]?.doctorname}</h5>
                                                <p className='text-primary fw-bold text-uppercase m-0' style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>{missedAppointments[0]?.doctorspecialist}</p>
                                            </div>
                                        </div>
                                    </section> : ""
                                }

                                {UserRole === "doctor" ?
                                    <section className='DoctorDetail-Banner col-12 mb-4'>
                                        <div className='w-100 p-3 premium-card border-0 position-relative overflow-hidden' style={{ background: 'var(--secondary-gradient)', minHeight: '180px' }}>
                                            <OptimizedImage src={`/assets/img/Patient.png`} style={{ height: '180px', borderRadius: '1rem' }} imageStyle={{ height: '180px', borderRadius: '1rem' }} objectFit="contain" alt="Patient" />
                                            <div className='position-absolute text-center glass-effect p-2 rounded-3 shadow-sm' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: '200px' }}>
                                                <h5 className='m-0 fw-bold text-capitalize' style={{ color: '#2d3436' }}>{missedAppointments[0]?.patientname}</h5>
                                                <p className='text-primary fw-bold text-uppercase m-0' style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>{missedAppointments[0]?.problem}</p>
                                            </div>
                                        </div>
                                    </section> : ""
                                }

                                <section className='col-12 w-100 DoctorDetail-Name d-flex justify-content-between align-items-center my-2'>
                                    {/* <!-- Form --> */}
                                    <form className='AppointmentBill-form'>
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
                                                            <span className="fw-bold text-dark" >Total</span>
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
                                                                <small className='fw-bold text-dark text-capitalize'>{missedAppointments[0]?.patientname}</small>
                                                            </div>
                                                            <div className='d-flex justify-content-between mb-2'>
                                                                <small className="fw-medium">Age</small>
                                                                <small className='fw-bold text-dark'>{missedAppointments[0]?.age} Years</small>
                                                            </div>
                                                            <div className='d-flex justify-content-between mb-2'>
                                                                <small className="fw-medium">Weight</small>
                                                                <small className='fw-bold text-dark'>{missedAppointments[0]?.weight} Kg</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-12 mb-4'>
                                                <div className="mb-3">
                                                    <div className='glass-effect p-4 rounded-4 shadow-sm border-0' style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
                                                        <h5 className='fw-bold mb-3' style={{ color: '#2d3436' }}><i className="fa-solid fa-clock me-2 text-primary"></i>Visit Time</h5>

                                                        {UserRole === 'patient' ?
                                                            <div className='alert alert-danger glass-effect border-0 bg-danger bg-opacity-10 mb-3 px-3 py-2 rounded-3'>
                                                                <small className='fw-bold d-block'><i className="fa-solid fa-circle-exclamation me-2"></i>You missed your scheduled appointment. Please reschedule at your earliest convenience to ensure timely care.</small>
                                                            </div> :
                                                            <div className='alert alert-danger glass-effect border-0 bg-danger bg-opacity-10 mb-3 px-3 py-2 rounded-3'>
                                                                <small className='fw-bold d-block'><i className="fa-solid fa-circle-exclamation me-2"></i><span className='text-capitalize'>{missedAppointments[0]?.patientname}</span> missed the scheduled appointment.</small>
                                                            </div>
                                                        }
                                                        <div className="text-secondary" >
                                                            <div className='d-flex justify-content-between mb-2'>
                                                                <small className="fw-medium">Day</small>
                                                                <small className='fw-bold text-dark'>{new Date(missedAppointments[0]?.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', })}</small>
                                                            </div>
                                                            <div className='d-flex justify-content-between mb-2'>
                                                                <small className="fw-medium">Time</small>
                                                                <small className='fw-bold text-dark'>{missedAppointments[0]?.time}</small>
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
