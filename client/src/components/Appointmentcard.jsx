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
      <div className='d-flex align-items-center bg-white shadow-sm gap-2 gap-md-3 p-1 p-md-2 rounded-3 my-2 cursor-pointer' onClick={ShowAppointmentDetails}>

        {localStorage.getItem('UserRole') === "patient" ? <>
          <div className='Appointmentcard-img-container bg-light rounded-3'>
            <OptimizedImage src={`/assets/img/Doctor_${index + 1}.png`} alt="doctor" />
          </div>
          <div className='w-100'>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='my-2'>
                <h6 className='m-0'>Dr. {Appointments?.doctorname}</h6>
                <p className='text-secondary m-0'>{Appointments?.doctorspecialist}</p>
              </div>
              <div>
                <img src="/assets/img/Doctorr.png" alt="Call" style={{ width: "30px" }} />
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='text-secondary m-0'>{new Date(Appointments?.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', })}</p>
              <p className='badge bg-info rounded-5 m-0'>{Appointments?.status}</p>
            </div>
          </div></> : ""
        }

        {localStorage.getItem('UserRole') === "doctor" ? <>
          <div className='Appointmentcard-img-container bg-light rounded-3'>
            <OptimizedImage src={`/assets/img/Patient.png`} alt="doctor" />
          </div>
          <div className='w-100'>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='my-2'>
                <h6 className='m-0 text-capitalize'>{Appointments?.patientname}</h6>
                {/* {Appointments?.} */}
                <p className='text-secondary text-capitalize m-0'>{(Appointments?.problem).slice(0, 20)}...</p>
              </div>
              <div>
                {Appointments?.status === "Scheduled" ?
                  <p className='btn btn-outline-success btn-sm rounded-2 py-0 m-0' onClick={() => handleCompletedUpdateStatus(Appointments._id)} >Complete<i class="fa-solid fa-circle-check ms-1"></i></p> :
                  <img src="/assets/img/Doctorr.png" alt="Call" style={{ width: "30px" }} />
                }
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='text-secondary m-0'>{new Date(Appointments?.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', })}</p>
              {Appointments?.status === "Scheduled" ?
                <p className='btn btn-outline-danger btn-sm rounded-3 py-0 m-0' onClick={() => handleMissedUpdateStatus(Appointments._id)}>Missed<i class="fa-solid fa-circle-xmark ms-1"></i></p> :
                <p className='badge bg-info rounded-5 m-0'>{Appointments?.status}</p>
              }
            </div>
          </div></> : ""
        }

      </div>
    </>
  )
}

export default Appointmentcard
