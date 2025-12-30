import React from 'react'
import { Link } from 'react-router-dom'
import OptimizedImage from './OptimizedImage';

const OpeningPage = () => {
  return (
    <>
      <div className="get-start d-flex flex-column justify-content-between align-items-center my-4 text-center">
        <div className='d-flex justify-content-center'>
          <OptimizedImage src="/assets/img/Home.png" objectFit="contain" alt="" />
        </div>

        <h3 className='my-3'>Schedule <span className='text-info'>appointments</span> <br /> with expert doctors!</h3>

        <p className='text-secondary'>Easily book appointments with top-rated doctors <br /> in various specialties.</p>

        <Link to="/welcomePage"><button className='btn btn-info text-white text-bold my-4'>Next</button></Link>
      </div>
    </>
  )
}

export default OpeningPage
