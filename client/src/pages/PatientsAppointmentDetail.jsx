import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import OptimizedImage from '../components/OptimizedImage';

const PatientsAppointmentDetail = () => {
    const location = useLocation();
    const doctorImageIndex = location.state?.doctorImageIndex;

    const navigate = useNavigate();
    const doctorDetail = location?.state?.doctorDetail;
    const [patiendetails, setPatiendetails] = useState({ Age: "", Weight: "", Problem: "", PatientName: '' });

    const handleOnchange = (e) => {
        setPatiendetails({ ...patiendetails, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...location.state, ...patiendetails });
        toast.info("Saving patient details and proceeding to bill...");
        navigate("/appointmentBill", { state: { ...location.state, ...patiendetails } })
    }

    return (
        <>
            <div className='p-2 p-md-4'>
                <div className='d-flex justify-content-center align-items-center'>
                    {/* PatientsAppointmentDetail-left-container  */}
                    <section className='col-md-8 PatientsAppointmentDetail-left-container'>
                        <section className='DoctorDetail-Banner mb-5'>
                            <div className='w-100 premium-card border-0 position-relative overflow-hidden' style={{ background: '#ffffff', height: '250px' }}>
                                <div className='d-flex justify-content-center h-100'>
                                    <OptimizedImage
                                        src={`/assets/img/Doctor_${(doctorImageIndex ?? 5) + 1}.png`}
                                        style={{ height: '250px', width: '100%' }}
                                        objectFit="contain"
                                        alt="Doctor"
                                    />
                                </div>
                                <div className='position-absolute text-center glass-effect px-3 py-2 rounded-2 shadow-sm border-0' style={{ bottom: '20px', left: '50%', transform: 'translateX(-50%)', minWidth: '10px', background: 'rgba(255,255,255,0.85)' }}>
                                    <h6 className='m-0 fw-bold' style={{ color: '#2d3436' }}>Dr. {doctorDetail?.name}</h6>
                                    <p className='text-primary fw-bold text-uppercase m-0 mt-1 small opacity-75' style={{ letterSpacing: '1px' }}>{doctorDetail?.doctorDetails?.specialist}</p>
                                </div>
                            </div>
                        </section>

                        <section className='d-flex justify-content-center align-items-center my-5'>
                            <div className="form-container col-12 glass-effect rounded-4 p-4 p-md-5 border-0 shadow-sm">
                                {/* <!-- Form --> */}
                                <form onSubmit={handleSubmit}>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className="mb-3">
                                                <label htmlFor="Patient" className="form-label">Patient</label>
                                                <input type="text" onChange={handleOnchange} name='PatientName' value={patiendetails.PatientName} className="form-control" id="Patient" placeholder="Patient" required />
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-6'>
                                            <div className="mb-3">
                                                <label htmlFor="Age" className="form-label">Age</label>
                                                <input type="number" name='Age' value={patiendetails.Age} className="form-control" id="Age" placeholder="Age" onChange={handleOnchange} required />
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-6'>
                                            <div className="mb-3">
                                                <label htmlFor="weight" className="form-label">Weight (kg)</label>
                                                <input type="number" name='Weight' value={patiendetails.Weight} className="form-control" id="weight" placeholder="Weight" onChange={handleOnchange} required />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="mb-3">
                                                <label htmlFor="problem" className="form-label">Brifly describe your problem</label>
                                                <textarea type="text" name='Problem' value={patiendetails.Problem} className="form-control" id="problem" placeholder="Describe Your Problem.............." onChange={handleOnchange} required />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary-gradient border-0 rounded-pill py-3 fw-bold shadow-sm w-100 transition-smooth mt-4 uppercase" style={{ background: 'var(--primary-gradient)', letterSpacing: '1px' }}>
                                        Continue to Payment <i className="fa-solid fa-arrow-right ms-2"></i>
                                    </button>
                                </form>
                            </div>
                        </section>
                    </section>
                </div>
            </div>

        </>
    )
}

export default PatientsAppointmentDetail;
