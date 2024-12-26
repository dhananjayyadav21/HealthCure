import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <>
       <div className="get-start d-flex flex-column justify-content-between align-items-center my-4 gap-5 text-center">
          <div className='d-flex flex-column justify-content-center'>
            <img src="/assets/img/Doctorr.png" alt="" />
            <h4 className='text-primary my-1'>HealthCure</h4>
            <p className='text-secondary'>Welcom to HealthCure</p>
          </div>

    
         <div className='d-flex flex-column gap-3'>
            <Link to="/signin"><button className='btn btn-info text-white text-bold'>Sing In</button></Link>
            <Link to="/signup"><button className='btn btn-info text-white text-bold'>Sing Up</button></Link>
         </div>  
       </div>
    </>
  )
}

export default WelcomePage
