import React, { useContext, useEffect, useState } from 'react'
import OptimizedImage from './OptimizedImage'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Notification = () => {
  const Context = useContext(AuthContext);
  const { GetAppointments } = Context;
  const [missedAppointments, setMissedAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMissed();
    // eslint-disable-next-line
  }, []);

  const fetchMissed = async () => {
    try {
      const res = await GetAppointments("Missed");
      setMissedAppointments(res.appointments || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReschedule = (appointment) => {
    navigate(`/patientDetailAfterBook/:0`, {
      state: { ...appointment },
    });
  };

  return (
    <>
      <div className='container-fluid py-4' style={{ background: '#f8f9fa', minHeight: '100vh' }}>
        <div className='container'>
          <div className='d-flex align-items-center gap-3 mb-4 ps-3'>
            <div className='glass-effect p-2 rounded-circle shadow-sm'>
              <i className="fa-solid fa-bell text-primary fs-5"></i>
            </div>
            <div>
              <h4 className="fw-bold m-0" style={{ color: '#2d3436' }}>Your Notifications</h4>
              <p className='text-secondary small m-0'>Stay updated with your appointment status</p>
            </div>
          </div>

          {missedAppointments.length === 0 ? (
            <div className='text-center py-5'>
              <div className='glass-effect d-inline-block p-4 rounded-circle shadow-sm mb-3'>
                <i className="fa-solid fa-bell-slash text-light fs-1"></i>
              </div>
              <h5 className='text-secondary'>No new notifications</h5>
            </div>
          ) : (
            <div className='row g-4'>
              {missedAppointments.map((app, i) =>
                <div className="col-md-6 col-lg-4" key={app._id}>
                  <div className="premium-card glass-effect d-flex align-items-center border-0 p-3 rounded-4 shadow-sm transition-smooth position-relative overflow-hidden" style={{ minHeight: '110px' }}>
                    <div className='rounded-circle p-1 shadow-sm transition-smooth me-3' style={{ background: 'var(--secondary-gradient)', width: '64px', height: '64px' }}>
                      <OptimizedImage src={`/assets/img/Doctor_${i % 6 + 1}.png`} alt="Doctor" objectFit="contain" style={{ width: '56px', height: '56px', borderRadius: '50%' }} imageStyle={{ borderRadius: '50%' }} />
                    </div>
                    <div className="flex-grow-1">
                      <div className='d-flex justify-content-between align-items-start'>
                        <h6 className="mb-1 text-danger fw-bold" style={{ fontSize: '0.9rem' }}>Missed Reminder</h6>
                        <small className='text-muted opacity-75' style={{ fontSize: '0.65rem' }}>Just now</small>
                      </div>
                      <p className="mb-2 text-secondary" style={{ fontSize: '0.8rem', lineHeight: '1.2' }}>
                        You missed your appointment with <strong className='text-dark'>Dr. {app.doctorname}</strong>
                      </p>
                      <button
                        className="btn btn-primary-gradient border-0 btn-sm rounded-pill px-3 py-1 fw-bold shadow-sm"
                        style={{ background: 'var(--primary-gradient)', fontSize: '0.7rem' }}
                        onClick={() => handleReschedule(app)}
                      >
                        Reschedule Now
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Notification
