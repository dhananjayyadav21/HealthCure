import React from 'react'
import { Link } from 'react-router-dom';

const PatientsAppointmentDetail = () => {
  return (
    <>
        <div className='p-2 p-md-4'>      
         <div className='d-flex justify-content-center align-items-center'>
             {/* PatientsAppointmentDetail-left-container  */}
             <section className='col-md-6 PatientsAppointmentDetail-left-container'>
                 <section className='DoctorDetail-Banner'>
                     <div className='w-100 px-2 pt-2 border rounded-4 bg-light position-relative'>
                         <img src="/assets/img/Doctor_5.png" alt="Doctor" />
                         <div className='position-absolute text-xenter'>
                             <h5>Dr. Cyden Stack</h5>
                             <p className='text-secondary'>Sr. Dental Specialist</p>
                         </div>
                     </div>
                 </section>
 
                <section className='d-flex justify-content-between align-items-center my-3'>
                    <div className="form-containe col-12 shadow rounded-4 py-4 px-3 p-md-5">
                        {/* <!-- Form --> */}
                        <form>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className="mb-3">
                                        <label htmlFor="Patient" className="form-label">Patient</label> 
                                        <input type="text" className="form-control" id="Patient" placeholder="Patient"/>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className="mb-3">
                                        <label htmlFor="Age" className="form-label">Age</label> 
                                        <input type="number" className="form-control" id="Age" placeholder="Age"/>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className="mb-3">
                                        <label htmlFor="weight" className="form-label">Weight (kg)</label> 
                                        <input type="number" className="form-control" id="weight" placeholder="Weight"/>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className="mb-3">
                                        <label htmlFor="problem" className="form-label">Brifly describe your problem</label> 
                                        <textarea type="text" className="form-control" id="problem" placeholder="Describe Your Problem.............."/>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-info text-white fw-bolder fs-4 w-100"><Link className='nav-link' to="/appointmentBill">PROCEED NEXT</Link></button>
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
