import React from 'react'
import { Link } from 'react-router-dom'

const BookSedule = () => {

    let date = [{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
    let morning = [{},{},{}]
    let Afternoon = [{},{},{},{},{},{}]
    let Evening = [{},{},{},{},{},{},]

  return (
    <>
      <div className='BookSedule-container p-2 potion-relative'>
        
        {/* Sedule Date */}
        <section className='SeduleDate my-4'>
            <small><p className='fw-bold'>December</p></small>
            <div className='row g-2'>
               {date.map((e)=>
                <div className='col-3'>
                    <div className='btn btn-outline-info fw-bolder rounded-3 d-flex flex-column justify-content-center'>
                    <p className='m-0'>Mon</p>
                    <p className='m-0'>10</p>
                    </div>
                </div> )} 
            </div>
        </section>

        {/* Morning Slots */}
        <section className='MorningSlots my-4'>
            <small><p className='fw-bold'>Morning Slots</p></small>
            <div className='row g-2'>
               {morning.map((e)=>
                <div className='col-4'>
                    <div className='btn btn-outline-info rounded-3 d-flex justify-content-center'>
                        <p className='m-0'>10:30</p>
                        <p className='m-0'>Am</p>
                    </div>
                </div> )} 
            </div>
        </section>

        {/* Afternoon Slots */}
        <section className='AfternoonSlots my-4'>
            <small><p className='fw-bold'>Afternoon Slots</p></small>
            <div className='row g-2'>
               {Afternoon.map((e)=>
                <div className='col-4'>
                    <div className='btn btn-outline-info rounded-3 d-flex justify-content-center'>
                        <p className='m-0'>01:30</p>
                        <p className='m-0'>Pm</p>
                    </div>
                </div> )} 
            </div>
        </section>

        {/* Evening Slots */}
        <section className='EveningSlots my-4'>
            <small><p className='fw-bold'>Evening Slots</p></small>
            <div className='row g-2'>
            {Evening.map((e)=>
                <div className='col-4'>
                    <div className='btn btn-outline-info rounded-3 d-flex justify-content-center'>
                        <p className='m-0'>7:30</p>
                        <p className='m-0'>Pm</p>
                    </div>
                </div> )} 
            </div>
        </section>

        <div>
            <Link className='btn btn-warning btn-RequestAppointment text-white fw-sm-bold my-3' to="/patientsAppointmentDetail">Request for Appointment</Link>
        </div>

      </div>
    </>
  )
}

export default BookSedule
