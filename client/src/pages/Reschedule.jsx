import React, { useContext,useEffect, useState } from 'react'
import Appointmentcard from '../components/Appointmentcard'
import AuthContext from '../context/AuthContext'
import { useLocation } from 'react-router'

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
                              {missedAppointments?.map((Appointments,index)=>{
                              let currentindex = index % 10
                              return  <Appointmentcard key={index} index={currentindex} Appointments={Appointments}/> })}  
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
                        <section className='DoctorDetail-Banner col-12 '>
                            <div className='w-100 px-2 pt-2 border rounded-4 bg-white position-relative'>
                                <img src={`/assets/img/Doctor_6.png`} alt="Doctor" />
                                <div className='position-absolute text-xenter'>
                                <h5>Dr. {missedAppointments[0]?.doctorname}</h5>
                                    <p className='text-secondary'>Sr. {missedAppointments[0]?.doctorspecialist}</p>
                                </div>
                            </div>
                        </section> :""
                    }

                    {UserRole === "doctor" ?
                        <section className='DoctorDetail-Banner col-12 '>
                            <div className='w-100 px-2 pt-2 border rounded-4 bg-white position-relative'>
                                <img src={`/assets/img/Patient.png`} alt="Doctor" />
                                <div className='position-absolute text-xenter'>
                                <h5 className='text-capitalize'>{missedAppointments[0]?.patientname}</h5>
                                    <p className='text-secondary text-capitalize'>{missedAppointments[0]?.problem}</p>
                                </div>
                            </div>
                        </section> : ""
                    }

                        <section className='col-12 w-100 DoctorDetail-Name d-flex justify-content-between align-items-center my-2'>
                          {/* <!-- Form --> */}
                          <form className='AppointmentBill-form'>
                            <div className='row'>  
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <div className='border p-3 rounded-3 AppointmentBill-Patientdetails'>
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
                                        <div className='border p-3 rounded-3 AppointmentBill-Patientdetails'>
                                            <h6>Patient info:</h6>
                                            <div className="text-secondary" >
                                              <div className='d-flex'>
                                                  <p className="m-1 w-25">Name</p>
                                                  <p className='m-1'>:  {missedAppointments[0]?.patientname}</p>
                                              </div>
                                              <div className='d-flex'>
                                                  <p className="m-1 w-25">Age</p>
                                                  <p className='m-1'>:  {missedAppointments[0]?.age}</p>
                                              </div>
                                              <div className='d-flex'>
                                                  <p className="m-1 w-25">Weight </p>
                                                  <p className='m-1'>:  {missedAppointments[0]?.weight}</p>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
 
                                <div className='col-12'>
                                    <div className="mb-3">
                                        <div className='border p-3 rounded-3 AppointmentBill-payment'>
                                            <h5>Visit Time</h5>
                                         
                                        {UserRole === 'patient' ? <>
                                            <p className='text-danger text-capitalize'><i className="fa-solid fa-circle-exclamation"></i> You missed your scheduled appointment. Please reschedule at your earliest convenience to ensure timely care.</p></> :  
                                            <p className='text-danger text-capitalize'><i className="fa-solid fa-circle-exclamation"></i><span className='text-capitalize'> {missedAppointments[0]?.patientname} </span>missed scheduled appointment.</p>
                                        } 
                                            <div className="text-secondary" >
                                              <div className='d-flex'>
                                                  <p className="m-1 w-25">Day</p>
                                                  <p className='m-1'>:{new Date(missedAppointments[0]?.date).toLocaleDateString('en-IN',{timeZone: 'Asia/Kolkata',})}</p>
                                              </div>
                                              <div className='d-flex'>
                                                  <p className="m-1 w-25">Time</p>
                                                  <p className='m-1'>:  {missedAppointments[0]?.time}</p>
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
