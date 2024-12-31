import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const PatientsAppointmentDetail = () => {
    const location = useLocation();
    const navigate = useNavigate(); 
    const doctorDetail = location?.state?.doctorDetail;
    const [ patiendetails, setPatiendetails] = useState({Age:"", Weight:"", Problem:"",PatientName:''});

    const handleOnchange = (e)=>{
        setPatiendetails({...patiendetails, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log({...location.state,...patiendetails});
        navigate("/appointmentBill",{state:{...location.state,...patiendetails}})
    }

  return (
    <>
        <div className='p-2 p-md-4'>      
         <div className='d-flex justify-content-center align-items-center'>
             {/* PatientsAppointmentDetail-left-container  */}
             <section className='col-md-8 PatientsAppointmentDetail-left-container'>
                 <section className='DoctorDetail-Banner'>
                     <div className='w-100 px-2 pt-2 border rounded-4 bg-light position-relative'>
                         <img src="/assets/img/Doctor_6.png" alt="Doctor" />
                         <div className='position-absolute text-xenter'>
                             <h5>Dr. {doctorDetail?.name}</h5>
                             <p className='text-secondary'>{doctorDetail?.doctorDetails?.specialist}</p>
                         </div>
                     </div>
                 </section>
 
                <section className='d-flex justify-content-between align-items-center my-3'>
                    <div className="form-containe col-12 shadow rounded-4 py-4 px-3 p-md-5">
                        {/* <!-- Form --> */}
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className="mb-3">
                                        <label htmlFor="Patient" className="form-label">Patient</label> 
                                        <input type="text" onChange={handleOnchange} name='PatientName' value={patiendetails.PatientName}  className="form-control" id="Patient" placeholder="Patient"/>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className="mb-3">
                                        <label htmlFor="Age" className="form-label">Age</label> 
                                        <input type="number" name='Age' value={patiendetails.Age} className="form-control" id="Age" placeholder="Age" onChange={handleOnchange}/>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className="mb-3">
                                        <label htmlFor="weight" className="form-label">Weight (kg)</label> 
                                        <input type="number" name='Weight' value={patiendetails.Weight} className="form-control" id="weight" placeholder="Weight" onChange={handleOnchange}/>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className="mb-3">
                                        <label htmlFor="problem" className="form-label">Brifly describe your problem</label> 
                                        <textarea type="text" name='Problem' value={patiendetails.Problem}  className="form-control" id="problem" placeholder="Describe Your Problem.............." onChange={handleOnchange}/>
                                    </div>
                                </div>
                            </div>
                            {/* <button type="submit" className="btn btn-info text-white fw-bolder fs-4 w-100"><Link className='nav-link' to="/appointmentBill">PROCEED NEXT</Link></button> */}
                            <button type="submit" className="btn btn-info text-white fw-bolder fs-6 w-100"> PROCEED NEXT</button>
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
