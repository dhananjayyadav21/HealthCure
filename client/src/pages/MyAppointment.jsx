import React from 'react'

const MyAppointment = () => {
  return (
    <>
      <div className='my-3'>
        <div className='container-fluid'>
            <div className='row'>
 
            {/* Missed Appointment */}
            <section className='col-md-4'>
               <div className='mx-2 bg-danger'>
                     hhh
               </div>
            </section>

            {/* Upcomming Appointment */}
            <section className='col-md-4'>
               <div className='mx-2 bg-info'>
                    cdc
               </div>
            </section> 

            {/* Past Appointment */}
            <section className='col-md-4'>
               <div className='mx-2 bg-success'>
                    cdc
               </div>
            </section> 

            </div>
        </div>
      </div>
    </>
  )
}

export default MyAppointment
