import React, { useContext, useEffect, useState } from 'react'
import Appointmentcard from '../components/Appointmentcard'
import AuthContext from '../context/AuthContext'

const MyAppointment = () => {

  const Context = useContext(AuthContext);
  const { GetAppointments } = Context;

  useEffect(() => {
    GetMissedAppointments("Missed");
    GetScheduledAppointments("Scheduled");
    GetCompletedAppointments("Completed");
    // eslint-disable-next-line
  }, []);

  const [missedAppointments, setMissedAppointments] = useState([]);
  const [scheduledAppointments, setScheduledAppointments] = useState([]);
  const [completedAppointments, setCompletedAppointments] = useState([]);

  const GetMissedAppointments = async (appointmentStatus) => {
    try {
      const res = await GetAppointments(appointmentStatus);
      setMissedAppointments(res.appointments);
    } catch (error) {
      console.log(error);
    }
  };

  const GetScheduledAppointments = async (appointmentStatus) => {
    try {
      const res = await GetAppointments(appointmentStatus);
      setScheduledAppointments(res.appointments);
    } catch (error) {
      console.log(error);
    }
  };

  const GetCompletedAppointments = async (appointmentStatus) => {
    try {
      const res = await GetAppointments(appointmentStatus);
      setCompletedAppointments(res.appointments);
    } catch (error) {
      console.log(error);
    }
  };




  const [Mdisplay, setMdisplay] = useState("");
  const [Udisplay, setUdisplay] = useState("");
  const [Pdisplay, setPdisplay] = useState("");

  const showMissed = () => {
    setMdisplay("");
    setUdisplay("none");
    setPdisplay("none");
  };

  const showUpco = () => {
    setMdisplay("none");
    setUdisplay("");
    setPdisplay("none");
  };

  const showPast = () => {
    setMdisplay("none");
    setUdisplay("none");
    setPdisplay("");
  };


  return (
    <>
      <div className='py-md-3' style={{ background: '#f8f9fa', minHeight: '100vh' }}>
        <div className='container-fluid MyAppointment-container'>
          <div className='row'>

            <section className='container-fluid d-md-none glass-effect mb-3 position-sticky top-0 z-3 p-2 rounded-bottom-4 shadow-sm'>
              <div className='d-flex justify-content-around align-items-center'>
                {/* Missed Appointment */}
                <div className='col-4 px-1' onClick={showMissed} >
                  <div className='d-flex justify-content-center align-items-center gap-2 p-2 glass-effect rounded-3 cursor-pointer transition-smooth border border-white'>
                    <span className='p-1 rounded-circle bg-danger' style={{ width: '8px', height: '8px' }}></span>
                    <small className='fw-bold text-secondary'>Missed</small>
                  </div>
                </div>

                {/* upco Appointment */}
                <div className='col-4 px-1' onClick={showUpco}>
                  <div className='d-flex justify-content-center align-items-center gap-2 p-2 glass-effect rounded-3 cursor-pointer transition-smooth border border-white'>
                    <span className='p-1 rounded-circle bg-warning' style={{ width: '8px', height: '8px' }}></span>
                    <small className='fw-bold text-secondary'>Upcoming</small>
                  </div>
                </div>

                {/* past Appointment */}
                <div className='col-4 px-1' onClick={showPast}>
                  <div className='d-flex justify-content-center align-items-center gap-2 p-2 glass-effect rounded-3 cursor-pointer transition-smooth border border-white'>
                    <span className='p-1 rounded-circle bg-success' style={{ width: '8px', height: '8px' }}></span>
                    <small className='fw-bold text-secondary'>Done</small>
                  </div>
                </div>
              </div>
            </section>

            {/* Missed Appointment */}
            <section className={`col-md-4 d-${Mdisplay}`}>
              <div className='p-1'>
                <div className='glass-effect d-flex justify-content-center align-items-center gap-3 m-2 py-3 rounded-4 shadow-sm border-0 position-relative' style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
                  <span className='p-1 rounded-circle bg-danger shadow-sm' style={{ width: '10px', height: '10px' }}></span>
                  <h6 className='m-0 fw-bold' style={{ color: '#2d3436' }}>Missed</h6>
                  <span className="count-icon bg-danger-gradient shadow-sm d-flex justify-content-center align-items-center text-white m-0" style={{ background: 'linear-gradient(135deg, #ff7675, #d63031)', width: '28px', height: '28px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 'bold' }}>{missedAppointments.length}</span>
                </div>

                <div className='Missed-Appointment scrollable '>
                  <div className='px-2'>
                    {missedAppointments.map((Appointments, index) => {
                      let currentindex = index % 6;
                      return <Appointmentcard key={index} index={currentindex} Appointments={Appointments} />
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* Upcomming Appointment */}
            <section className={`col-md-4 d-${Udisplay}`}>
              <div className='p-1'>
                <div className='glass-effect d-flex justify-content-center align-items-center gap-3 m-2 py-3 rounded-4 shadow-sm border-0 position-relative' style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
                  <span className='p-1 rounded-circle bg-warning shadow-sm' style={{ width: '10px', height: '10px' }}></span>
                  <h6 className='m-0 fw-bold' style={{ color: '#2d3436' }}>Upcoming</h6>
                  <span className="count-icon bg-warning-gradient shadow-sm d-flex justify-content-center align-items-center text-white m-0" style={{ background: 'linear-gradient(135deg, #fab1a0, #e17055)', width: '28px', height: '28px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 'bold' }}>{scheduledAppointments.length}</span>
                </div>

                <div className='Upcomming-Appointment scrollable'>
                  <div className='px-2'>
                    {scheduledAppointments?.map((Appointments, index) => {
                      let currentindex = index % 6;
                      return <Appointmentcard key={index} index={currentindex} Appointments={Appointments} />
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* Past Appointment */}
            <section className={`col-md-4 d-${Pdisplay}`}>
              <div className='p-1'>
                <div className='glass-effect d-flex justify-content-center align-items-center gap-3 m-2 py-3 rounded-4 shadow-sm border-0 position-relative' style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
                  <span className='p-1 rounded-circle bg-success shadow-sm' style={{ width: '10px', height: '10px' }}></span>
                  <h6 className='m-0 fw-bold' style={{ color: '#2d3436' }}>Completed</h6>
                  <span className="count-icon bg-success-gradient shadow-sm d-flex justify-content-center align-items-center text-white m-0" style={{ background: 'linear-gradient(135deg, #55efc4, #00b894)', width: '28px', height: '28px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 'bold' }}>{completedAppointments.length}</span>
                </div>

                <div className='Past-Appointment scrollable'>
                  <div className='px-2'>
                    {completedAppointments?.map((Appointments, index) => {
                      let currentindex = index % 6
                      return <Appointmentcard key={index} index={currentindex} Appointments={Appointments} />
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyAppointment
