import React, { useState } from 'react'
import Appointmentcard from '../components/Appointmentcard'

const MyAppointment = () => {

  let Missed = [{},{},{},{},{},{},{},{},{},{}]
  let Upcomming = [{},{},{}]
  let Past = [{},{},{},{},{}]

  const [Mdisplay , setMdisplay] = useState("");
  const [Udisplay , setUdisplay] = useState("");
  const [Pdisplay , setPdisplay] = useState("");

  const showMissed = ()=>{
    setMdisplay("");
    setUdisplay("none");
    setPdisplay("none");
  }

  const showUpco = ()=>{
    setMdisplay("none");
    setUdisplay("");
    setPdisplay("none");
  }

  const showPast = ()=>{
    setMdisplay("none");
    setUdisplay("none");
    setPdisplay("");
  }


  return (
    <>
      <div className='my-3'>
        <div className='container-fluid MyAppointment-container'>
            <div className='row'>

             <section className='container-fluid d-md-none'>
                <div className='d-flex justify-content-around align-items center my-2'>
                 
                  {/* Missed Appointment */}
                  <section className='col-4' onClick={showMissed} >
                    <div className='d-flex justify-content-center align-items-center gap-1 p-1 bg-light mx-2 rounded-3'>
                      <span className='btn btn-danger rounded-circle p-1 m-0'></span>
                      <p className='m-0'>Missed</p> 
                      <span className="count-icon bg-danger shadow-sm d-flex justify-content-center align-items-center text-white m-0">5</span>
                    </div>
                  </section>

                  {/* upco Appointment */}
                  <section className='col-4' onClick={showUpco}>
                    <div className='d-flex justify-content-center align-items-center gap-1 p-1 bg-light mx-2 rounded-3'>
                      <span className='btn btn-warning rounded-circle p-1 m-0'></span>
                      <p className='m-0'>Up-co</p> 
                      <span className="count-icon bg-warning shadow-sm d-flex justify-content-center align-items-center text-white m-0">5</span>
                    </div>
                  </section>

                  {/* past Appointment */}
                  <section className='col-4' onClick={showPast}>
                    <div className='d-flex justify-content-center align-items-center gap-1 p-1 bg-light mx-2 rounded-3'>
                     <span className='btn btn-success rounded-circle p-1 m-0'></span> 
                      <p className='m-0'>Past</p> 
                      <span className="count-icon bg-success shadow-sm d-flex justify-content-center align-items-center text-white m-0">5</span>
                    </div>
                  </section>

               </div>
             </section>

              {/* Missed Appointment */}
              <section className={`col-md-4 d-${Mdisplay} my-1`}>
                <div className=' bg-light p-1 py-3 rounded-4'>
                    <div className='d-flex justify-content-center align-items-center gap-3 px-2'>
                      <span className='btn btn-danger rounded-circle p-1 m-0'></span>
                      <h5 className='m-0'>Missed</h5> 
                      <span className="count-icon bg-danger shadow-sm d-flex justify-content-center align-items-center text-white m-0">5</span>
                    </div>
                    <div className='px-3'>
                       <hr /> 
                    </div>
                    <div className='Missed-Appointment scrollable'>
                      <div className='px-2'>
                        {Missed.map(()=>{
                        return  <Appointmentcard/> })}  
                      </div>
                    </div>
                </div>
              </section>

              {/* Upcomming Appointment */}
              <section className={`col-md-4 d-${Udisplay} my-1`}>
                <div className=' bg-light p-1 rounded-4'>
                    <div className='d-flex justify-content-center align-items-center gap-3 p-2'>
                      <span className='btn btn-warning rounded-circle p-1 m-0'></span>
                      <h5 className='m-0'>Upcomming</h5> 
                      <span className="count-icon bg-warning shadow-sm d-flex justify-content-center align-items-center text-white m-0">5</span>
                    </div>
                    <div className='px-3'>
                       <hr /> 
                    </div>
                    <div className='Upcomming-Appointment scrollable'>
                      <div className='px-2'>
                        {Upcomming.map(()=>{
                        return  <Appointmentcard/> })} 
                      </div>
                    </div>   
                </div>
              </section> 

              {/* Past Appointment */}
              <section className={`col-md-4 d-${Pdisplay} my-1`}>
                <div className=' bg-light p-1 rounded-4'>
                  <div className='d-flex justify-content-center align-items-center gap-3 p-2'>
                    <span className='btn btn-success rounded-circle p-1 m-0'></span>
                    <h5 className='m-0'>Past</h5> 
                    <span className="count-icon bg-success shadow-sm d-flex justify-content-center align-items-center text-white m-0">5</span>
                  </div>
                  <div className='px-3'>
                     <hr /> 
                  </div>
                  <div className='Past-Appointment scrollable'>
                    <div className='p-2'>
                      {Past.map(()=>{
                      return  <Appointmentcard/> })} 
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
