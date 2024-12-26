import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
       <div className="container d-flex justify-content-center align-items-center px-3 SignIn-Container">
        <div className="form-containe col-12 col-md-5 shadow rounded-4 py-4 px-4 p-md-5">

            {/* <!-- Sing In Heading --> */}
            <div className='mb-4'>
                <i className="fa-solid fa-2x fa-user my-3"></i>
                <h4 className="text-start fw-bold mb-1">Sing In</h4>
                <p className='text-secondary'>to continue to HealthCure</p>
            </div> 
           
            {/* <!-- Sing In Form --> */}
            <form noValidate>
                <div className="mb-3">
                    <small><label htmlFor="email" className="form-label">Email</label></small>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                </div>

                <div className="mb-3">
                   <div className='d-flex justify-content-between'>
                        <small><label htmlFor="password" className="form-label ">Password</label></small>
                        <small><Link to="/forgotPassword" className='nav-link fw-normal text-primary'>Forgot Password?</Link></small>
                    </div> 
                    <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
                </div>

                <button type="submit" className="btn btn-info text-white fw-bolder w-100">Sing In</button>
            </form>

        </div>
    </div>
    </>
  )
}

export default SignIn
