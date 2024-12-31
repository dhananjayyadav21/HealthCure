import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

const SignIn = () => {

    const Context = useContext(AuthContext);
    const { login } = Context;
    const navigate = useNavigate();

    const [errors,setErrors]= useState([]);

    const handleonSubmit = async (event) => {
      event.preventDefault();
      setErrors([]);
      const form = new FormData(event.target);
      const formDataObject = {};
      form.forEach((value, key) => {
        formDataObject[key] = value;
      });

      try {
        //login user with httpservice
       let res = await login(formDataObject);
        console.log(res)
       //If success true show alert and navigate
       if (res?.success === true) {
         localStorage.setItem('AuthToken', res.AuthToken);
         localStorage.setItem('UserRole', res.Role);
         alert(res.message);
         navigate("/");
       }
      } catch (error) {
        if (error?.response?.data?.errors) {
          setErrors(error?.response?.data?.errors ?? []);
        }
      }

    };

  return (
    <>
       <div className="container d-flex justify-content-center align-items-center px-3 py-3 py-md-5 SignIn-Container">
        <div className="form-containe col-12 col-sm-10 col-lg-5 shadow rounded-4 py-4 px-4 p-md-5">

            {/* <!-- Sing In Heading --> */}
            <div className='mb-4'>
                <i className="fa-solid fa-2x fa-user my-3"></i>
                <h4 className="text-start fw-bold mb-1">Sing In</h4>
                <p className='text-secondary'>to continue to HealthCure</p>
                {
                    errors.length !== 0 && <div>
                    { errors.map((e,i)=> 
                         <small key={i} className='d-block text-danger py-1'>
                         {e.msg}
                         </small>
                     )}
                    </div>
                }
            </div> 
           
            {/* <!-- Sing In Form --> */}
            <form onSubmit={handleonSubmit} >
                <div className="mb-3">
                    <small><label htmlFor="email" className="form-label">Email</label></small>
                    <input type="email" className="form-control" name='email' id="email" placeholder="Enter your email"/>
                </div>

                <div className="mb-3">
                   <div className='d-flex justify-content-between'>
                        <small><label htmlFor="password" className="form-label ">Password</label></small>
                        <small><Link to="/forgotPassword" className='nav-link fw-normal text-primary'>Forgot Password?</Link></small>
                    </div> 
                    <input type="password" className="form-control" name='password' id="password" placeholder="Enter your password"/>
                </div>

              <button id='login' type="submit" className="btn btn-info text-white fw-bolder w-100">Sing In</button> 
              <small className='d-flex p-1'>Don't have an account?<Link to="/signup" className='nav-link fw-normal text-primary'> Sign up</Link></small> 
            </form>

        </div>
    </div>
    </>
  )
}

export default SignIn
