import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

const AppointmentBill = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const Context = useContext(AuthContext);
    const { appointment } = Context;

    const PatientDetail = location.state;
    const doctorDetail = location?.state?.doctorDetail;
    const vat = 5;

    const appointmentDataObject = {
        patientname: PatientDetail?.PatientName,
        age: PatientDetail?.Age,
        weight: PatientDetail?.Weight,
        problem: PatientDetail?.Problem,
        consultionFees: doctorDetail?.doctorDetails?.Fees ?? 0,
        totalPay: (doctorDetail?.doctorDetails?.Fees ?? 0) + (doctorDetail?.doctorDetails?.Fees ?? 0) * vat / 100,
        doctorid: PatientDetail?.doctorId,
        doctorname: doctorDetail?.name,
        doctorspecialist: doctorDetail?.doctorDetails?.specialist,
        date: PatientDetail?.day,
        time: PatientDetail?.time,
        doctorImageIndex: location.state?.doctorImageIndex
    }

    const handleClick = async (event) => {
        event.preventDefault();
        let res = await appointment(appointmentDataObject);
        if (res?.success === true) {
            alert("Your Appointment Booked Successfully!");
            navigate('/appointment');
        } else {
            alert("Something went wrong!, please try again");
        }
    }

    const totalPayable = (doctorDetail?.doctorDetails?.Fees ?? 0) + ((doctorDetail?.doctorDetails?.Fees ?? 0) * vat / 100);

    return (
        <div className='py-4' style={{ background: '#f8f9fa', minHeight: '100vh' }}>
            <section className='container'>
                <div className="d-flex justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className='glass-effect p-4 p-md-5 rounded-4 shadow-sm border-0 position-relative' style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
                            <form className='AppointmentBill-form' onSubmit={handleClick}>
                                <div className='row'>
                                    <div className='col-12 mb-4'>
                                        <div className='glass-effect p-3 rounded-4 shadow-sm border-0 d-flex align-items-center gap-3' style={{ background: 'var(--secondary-gradient)' }}>
                                            <div className='p-2 rounded-circle bg-white shadow-sm'>
                                                <i className="fa-solid fa-file-invoice text-primary fs-5"></i>
                                            </div>
                                            <div>
                                                <h5 className='m-0 fw-bold' style={{ color: '#2d3436' }}>Appointment Checkout</h5>
                                                <p className='text-secondary small m-0'>Review your details before payment</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-6 mb-4'>
                                        <div className='glass-effect p-4 rounded-4 shadow-sm border-0 h-100' style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
                                            <h6 className='fw-bold mb-3' style={{ color: '#2d3436' }}><i className="fa-solid fa-user-injured me-2 text-primary"></i>Patient Info</h6>
                                            <div className="text-secondary">
                                                <div className='d-flex justify-content-between mb-2 pb-2 border-bottom'>
                                                    <small className="fw-medium">Name</small>
                                                    <small className='fw-bold text-dark text-capitalize'>{PatientDetail?.PatientName}</small>
                                                </div>
                                                <div className='d-flex justify-content-between mb-2 pb-2 border-bottom'>
                                                    <small className="fw-medium">Age</small>
                                                    <small className='fw-bold text-dark'>{PatientDetail?.Age} Years</small>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <small className="fw-medium">Weight</small>
                                                    <small className='fw-bold text-dark'>{PatientDetail?.Weight} Kg</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-6 mb-4'>
                                        <div className='glass-effect p-4 rounded-4 shadow-sm border-0 h-100' style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
                                            <h6 className='fw-bold mb-3' style={{ color: '#2d3436' }}><i className="fa-solid fa-user-doctor me-2 text-primary"></i>Doctor Info</h6>
                                            <div className="text-secondary">
                                                <div className='d-flex justify-content-between mb-2 pb-2 border-bottom'>
                                                    <small className="fw-medium">Doctor</small>
                                                    <small className='fw-bold text-dark text-capitalize'>Dr. {doctorDetail?.name}</small>
                                                </div>
                                                <div className='d-flex justify-content-between mb-2 pb-2 border-bottom'>
                                                    <small className="fw-medium">Contact</small>
                                                    <small className='fw-bold text-dark'>{doctorDetail?.doctorDetails?.hospitalContact || "210 456 8695"}</small>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <small className="fw-medium">Hospital</small>
                                                    <small className='fw-bold text-dark text-capitalize'>{doctorDetail?.doctorDetails?.hospital}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-12 mb-4'>
                                        <div className='glass-effect p-4 rounded-4 shadow-sm border-0' style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
                                            <h6 className='fw-bold mb-3' style={{ color: '#2d3436' }}><i className="fa-solid fa-receipt me-2 text-primary"></i>Bill Summary</h6>
                                            <div className='d-flex justify-content-between text-secondary mb-2'>
                                                <small className='fw-medium'>Consultation Fees</small>
                                                <span className='fw-bold text-dark'>${doctorDetail?.doctorDetails?.Fees ?? 0}</span>
                                            </div>
                                            <div className='d-flex justify-content-between text-secondary mb-3'>
                                                <small className='fw-medium'>VAT ({vat}%)</small>
                                                <span className='fw-bold text-dark'>${(doctorDetail?.doctorDetails?.Fees ?? 0) * vat / 100}</span>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center pt-3 border-top'>
                                                <h5 className='m-0 fw-bold' style={{ color: '#2d3436' }}>Total Payable</h5>
                                                <h5 className='m-0 fw-bold text-primary'>${totalPayable}</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-12 mb-4'>
                                        <div className='glass-effect p-4 rounded-4 shadow-sm border-0' style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
                                            <h6 className='fw-bold mb-3' style={{ color: '#2d3436' }}><i className="fa-solid fa-credit-card me-2 text-primary"></i>Payment Method</h6>
                                            <p className='text-secondary small mb-3'>Secure and encrypted payment processing</p>
                                            <div className="d-flex gap-3">
                                                <div className="flex-grow-1">
                                                    <input className="btn-check" type="radio" name="card" id="VisaCard" required />
                                                    <label className="btn btn-outline-primary w-100 py-3 rounded-3 fw-bold" htmlFor="VisaCard">
                                                        <i className="fa-brands fa-cc-visa me-2 fs-5"></i>Visa
                                                    </label>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <input className="btn-check" type="radio" name="card" id="Mastercard" required />
                                                    <label className="btn btn-outline-primary w-100 py-3 rounded-3 fw-bold" htmlFor="Mastercard">
                                                        <i className="fa-brands fa-cc-mastercard me-2 fs-5"></i>MasterCard
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary-gradient border-0 rounded-pill py-3 fw-bold shadow-sm w-100 transition-smooth mt-2" style={{ background: 'var(--primary-gradient)', fontSize: '1.1rem' }}>
                                    <i className="fa-solid fa-shield-check me-2"></i>Complete Booking & Pay
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AppointmentBill
