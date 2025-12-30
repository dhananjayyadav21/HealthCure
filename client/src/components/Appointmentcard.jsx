import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import OptimizedImage from './OptimizedImage';
import { toast } from 'sonner';

const Appointmentcard = (props) => {

  const { index, Appointments } = props;
  const navigate = useNavigate();

  const ShowAppointmentDetails = () => {
    navigate(`/patientDetailAfterBook/:${index}`, {
      state: { ...Appointments },
    });
  };


  const Context = useContext(AuthContext);
  const { UpdateAppointmentStatus } = Context;

  const AppointmentStatusUpdate = async (appointmentId, status) => {
    const res = await UpdateAppointmentStatus(appointmentId, status);
    if (res?.success === true) {
      toast.success("Appointment updated successfully!");
    }
  };

  const handleMissedUpdateStatus = (appointmentId) => {
    AppointmentStatusUpdate(appointmentId, { status: "Missed" });
  };

  const handleCompletedUpdateStatus = (appointmentId) => {
    AppointmentStatusUpdate(appointmentId, { status: "Completed" });
  }

  return (
    <>
      <div className='premium-card glass-effect d-flex align-items-center gap-3 p-3 rounded-4 my-3 cursor-pointer border-0 shadow-sm transition-smooth mb-3' onClick={ShowAppointmentDetails}>

        {localStorage.getItem('UserRole') === "patient" ? <>
          <div className='Appointmentcard-img-container rounded-3 overflow-hidden shadow-sm' style={{ background: 'var(--secondary-gradient)', padding: '4px' }}>
            <OptimizedImage src={`/assets/img/Doctor_${index + 1}.png`} alt="doctor" objectFit="contain" style={{ width: '60px', height: '60px', borderRadius: '12px' }} imageStyle={{ borderRadius: '12px' }} />
          </div>
          <div className='w-100 ps-2'>
            <div className='d-flex justify-content-between align-items-center mb-1'>
              <div>
                <h6 className='m-0 fw-bold' style={{ color: '#2d3436' }}>Dr. {Appointments?.doctorname}</h6>
                <p className='text-primary fw-bold small m-0 uppercase opacity-75' style={{ fontSize: '0.7rem' }}>{Appointments?.doctorspecialist}</p>
              </div>
              <div className='glass-effect p-2 rounded-circle shadow-sm'>
                <i className="fa-solid fa-phone-flip text-primary" style={{ fontSize: '1rem' }}></i>
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-2 pt-2 border-top' style={{ borderColor: 'rgba(0,0,0,0.05) !important' }}>
              <p className='text-secondary m-0 fw-medium small'>
                <i className="fa-regular fa-calendar-check me-1"></i>
                {new Date(Appointments?.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </p>
              <p className='badge rounded-pill m-0 px-3 py-1' style={{ background: Appointments?.status === 'Scheduled' ? 'var(--primary-gradient)' : Appointments?.status === 'Missed' ? '#ff7675' : '#55efc4', fontSize: '0.7rem' }}>{Appointments?.status}</p>
            </div>
          </div></> : ""
        }

        {localStorage.getItem('UserRole') === "doctor" ? <>
          <div className='Appointmentcard-img-container rounded-3 overflow-hidden shadow-sm' style={{ background: 'var(--secondary-gradient)', padding: '4px' }}>
            <OptimizedImage src={`/assets/img/Patient.png`} alt="patient" objectFit="contain" style={{ width: '60px', height: '60px', borderRadius: '12px' }} imageStyle={{ borderRadius: '12px' }} />
          </div>
          <div className='w-100 ps-2'>
            <div className='d-flex justify-content-between align-items-center mb-1'>
              <div>
                <h6 className='m-0 fw-bold text-capitalize' style={{ color: '#2d3436' }}>{Appointments?.patientname}</h6>
                <p className='text-secondary small m-0'>{(Appointments?.problem).slice(0, 25)}...</p>
              </div>
              <div>
                {Appointments?.status === "Scheduled" ?
                  <button className='btn btn-success-gradient border-0 px-3 py-1 rounded-pill text-white fw-bold shadow-sm transition-smooth' style={{ background: 'linear-gradient(135deg, #55efc4, #00b894)', fontSize: '0.75rem' }} onClick={(e) => { e.stopPropagation(); handleCompletedUpdateStatus(Appointments._id); }}>
                    Complete <i className="fa-solid fa-circle-check ms-1"></i>
                  </button> :
                  <div className='glass-effect p-2 rounded-circle shadow-sm'>
                    <i className="fa-solid fa-phone-flip text-primary" style={{ fontSize: '1rem' }}></i>
                  </div>
                }
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-2 pt-2 border-top' style={{ borderColor: 'rgba(0,0,0,0.05) !important' }}>
              <p className='text-secondary m-0 fw-medium small'>
                <i className="fa-regular fa-calendar-check me-1"></i>
                {new Date(Appointments?.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </p>
              {Appointments?.status === "Scheduled" ?
                <button className='btn btn-outline-danger btn-sm rounded-pill px-3 py-1 fw-bold border-2' style={{ fontSize: '0.75rem' }} onClick={(e) => { e.stopPropagation(); handleMissedUpdateStatus(Appointments._id); }}>
                  Mark Missed <i className="fa-solid fa-circle-xmark ms-1"></i>
                </button> :
                <p className='badge rounded-pill m-0 px-3 py-1 bg-light text-secondary' style={{ fontSize: '0.7rem' }}>{Appointments?.status}</p>
              }
            </div>
          </div></> : ""
        }

      </div>
    </>
  )
}

export default Appointmentcard
