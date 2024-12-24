import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center px-3 SignUp-Container">
        <div className="form-containe col-12 col-md-5 shadow rounded-4 py-4 px-3 p-md-5">

            {/* <!-- SignUp Header --> */}
            <div className='mb-4'>
                <i class="fa-solid fa-2x fa-user my-3"></i>
                <h4 className="text-start mb-1 fw-bold">SignUp</h4>
                 <p className='text-secondary'>to continue to HealthCure</p>
            </div>

            {/* <!-- Google SignUp Button --> */}
            {/* <div className="d-grid">
                <button className="btn btn-light border">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Icon" className="me-2"  style={{width:"20px"}}/>
                    Register with Google
                </button>
            </div> */}

            {/* <!-- Divider --> */}
            {/* <div className="text-center my-3">
                <small>or</small>
            </div> */}
            
            {/* <!-- SignUp Form --> */}
            <form noValidate>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className="mb-3">
                            <small><label htmlFor="username" className="form-label">Username</label></small>
                            <input type="text" className="form-control" id="username" placeholder="Enter your username"/>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className="mb-3">
                            <small><label htmlFor="email" className="form-label">Email</label></small>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className="mb-3">
                            <small><label htmlFor="password" className="form-label">Password</label></small>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className="mb-3">
                            <small><label htmlFor="confirmPassword" className="form-label">Confirm Password</label></small>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Re-enter your password"/>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-info text-white fw-bolder w-100"><Link className='nav-link' to="/signIn">Register</Link></button>
            </form>

        </div>
      </div>
    </>
  )
}

export default SignUp
