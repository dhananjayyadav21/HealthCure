import React from 'react'
import { useNavigate } from 'react-router-dom'

const DoctorCards = (props) => {
   const {index} = props;
  
   const navigate = useNavigate();

   const ShowDoctorDetails = ()=>{
      navigate("/doctorDetail")
   }

  return (
    <>
        <div className="col-sm-6 col-md-3" onClick={ShowDoctorDetails}>
            <div className='Doctor-card bg-white border mx-1 rounded-3 d-flex flex-column justify-content-center align-items-center gap-2 shadow-sm rounded-3 cursor-pointer'>
                <div className={`Doctor-img-container doctor-img-bg-${index+1} rounded-top-3`} >
                    <img className='card-img-top' src={`assets/img/Doctor_${index+1}.png`} alt="Doctors" />
                </div>  
                <div className='card-body py-2'>
                    <h6 className='m-0'>Dr. Mack Johan</h6>
                    <small><p className='m-0 text-secondary'>Dental Surgon</p></small>
                </div>
            </div>
        </div>
    </>
  )
}

export default DoctorCards
