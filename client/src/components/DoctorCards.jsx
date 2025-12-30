import React from 'react'
import { useNavigate } from 'react-router-dom'
import OptimizedImage from './OptimizedImage';

const DoctorCards = (props) => {
  const { index, doctor } = props;
  const navigate = useNavigate();
  const ShowDoctorDetails = () => {
    navigate(`/doctorDetail/${doctor._id}`, { state: { doctorDetail: doctor, doctorImageIndex: index } });
  };

  return (
    <>
      <div className="col-sm-6 col-md-3" onClick={ShowDoctorDetails}>
        <div className='premium-card d-flex flex-column justify-content-center align-items-center gap-2 cursor-pointer h-100 p-0 overflow-hidden'>
          <div className={`Doctor-img-container doctor-img-bg-${index + 1} w-100`} style={{ height: '180px' }}>
            <OptimizedImage className='w-100 h-100' objectFit="contain" src={`/assets/img/Doctor_${index + 1}.png`} alt="Doctors" />
          </div>
          <div className='card-body py-3 text-center'>
            <h6 className='m-0 text-capitalize fw-bold' style={{ color: '#2d3436' }}>Dr. {doctor.name}</h6>
            <p className='m-0 text-primary text-uppercase' style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.5px' }}>{doctor.doctorDetails.specialist}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorCards
