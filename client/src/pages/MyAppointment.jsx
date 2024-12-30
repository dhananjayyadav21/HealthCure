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
    const res = await GetAppointments(appointmentStatus);
    setMissedAppointments(res.appointments);
  };

  const GetScheduledAppointments = async (appointmentStatus) => {
    const res = await GetAppointments(appointmentStatus);
    setScheduledAppointments(res.appointments);
  };

  const GetCompletedAppointments = async (appointmentStatus) => {
    const res = await GetAppointments(appointmentStatus);
    setCompletedAppointments(res.appointments);
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
      <div className='py-md-3 bg-light'>
        <div className='container-fluid MyAppointment-container'>
            <div className='row'>

             <section className='container-fluid d-md-none bg-white mb-2 position-sticy top-0'>
                <div className='d-flex justify-content-around align-items center my-2'>     
                  {/* Missed Appointment */}
                  <section className='col-4' onClick={showMissed} >
                    <div className='d-flex justify-content-center align-items-center gap-1 p-1 bg-white mx-2 rounded-3'>
                      <span className='btn btn-danger rounded-circle p-1 m-0'></span>
                      <p className='m-0'>Missed</p> 
                    </div>
                  </section>

                  {/* upco Appointment */}
                  <section className='col-4' onClick={showUpco}>
                    <div className='d-flex justify-content-center align-items-center gap-1 p-1 bg-white mx-2 rounded-3'>
                      <span className='btn btn-warning rounded-circle p-1 m-0'></span>
                      <p className='m-0'>Up-co</p> 
                    </div>
                  </section>

                  {/* past Appointment */}
                  <section className='col-4' onClick={showPast}>
                    <div className='d-flex justify-content-center align-items-center gap-1 p-1 bg-white mx-2 rounded-3'>
                     <span className='btn btn-success rounded-circle p-1 m-0'></span> 
                      <p className='m-0'>Completed</p> 
                    </div>
                  </section>
               </div>
             </section>

              {/* Missed Appointment */}
              <section className={`col-md-4 d-${Mdisplay}`}>
                <div className='p-1'>
                    <div className={`d-flex justify-content-center align-items-center gap-3 m-2 py-2 bg-white rounded-2 border`}>
                      <span className='btn btn-danger rounded-circle p-1 m-0'></span>
                      <h6 className='m-0'>Missed</h6> 
                      <span className="count-icon bg-danger shadow-sm d-flex justify-content-center align-items-center text-white m-0">{missedAppointments.length}</span>
                    </div>
  
                    <div className='Missed-Appointment scrollable '>
                      <div className='px-2'>
                        {missedAppointments.map((Appointments,index)=>{
                         let currentindex = index % 10
                        return  <Appointmentcard key={index} index={currentindex} Appointments={Appointments}/> })}  
                      </div>
                    </div>
                </div>
              </section>

              {/* Upcomming Appointment */}
              <section className={`col-md-4 d-${Udisplay}`}>
                <div className='p-1'>
                    <div className={`bg-white d-flex justify-content-center align-items-center gap-3 m-2 py-2 bg-white rounded-2 border`}>
                      <span className='btn btn-warning rounded-circle p-1 m-0'></span>
                      <h6 className='m-0'>Upcomming</h6> 
                      <span className="count-icon bg-warning shadow-sm d-flex justify-content-center align-items-center text-white m-0">{scheduledAppointments.length}</span>
                    </div>
              
                    <div className='Upcomming-Appointment scrollable'>
                      <div className='px-2'>
                        {scheduledAppointments?.map((Appointments,index)=>{
                         let currentindex = index % 10
                        return  <Appointmentcard key={index} index={currentindex} Appointments={Appointments} />})} 
                      </div>
                    </div>   
                </div>
              </section> 

              {/* Past Appointment */}
              <section className={`col-md-4 d-${Pdisplay}`}>
                <div className='p-1'>
                  <div className={`bg-white d-flex justify-content-center align-items-center gap-3 m-2 py-2 bg-white rounded-2 
                    border`}>
                    <span className='btn btn-success rounded-circle p-1 m-0'></span>
                    <h6 className='m-0'>Completed</h6> 
                    <span className="count-icon bg-success shadow-sm d-flex justify-content-center align-items-center text-white m-0">{completedAppointments.length}</span>
                  </div>
                 
                  <div className='Past-Appointment scrollable'>
                    <div className='px-2'>
                      {completedAppointments?.map((Appointments,index)=>{
                      let currentindex = index % 10
                      return  <Appointmentcard key={index} index={currentindex} Appointments={Appointments}/>})} 
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
