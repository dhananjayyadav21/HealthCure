import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import { toast } from 'sonner';

const SignIn = () => {

  const Context = useContext(AuthContext);
  const { login } = Context;
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);

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
        toast.success(res.message || 'Successfully signed in!');
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
      <div className="container d-flex justify-content-center align-items-center px-3 py-5 SignIn-Container" style={{ minHeight: '80vh' }}>
        <div className="col-12 col-sm-10 col-lg-5 glass-effect premium-card p-4 p-md-5 border-0">

          {/* <!-- Sign In Heading --> */}
          <div className='mb-4 text-center'>
            <div className='d-inline-flex p-3 rounded-circle bg-primary bg-opacity-10 mb-3'>
              <i className="fa-solid fa-2x fa-user-lock text-primary"></i>
            </div>
            <h3 className="fw-bold mb-1" style={{ color: '#2d3436' }}>Sign In</h3>
            <p className='text-secondary small'>Welcome back to HealthCure</p>
            {
              errors.length !== 0 && <div className='mt-2'>
                {errors.map((e, i) =>
                  <small key={i} className='d-block text-danger py-1'>
                    <i className="fa-solid fa-circle-exclamation me-1"></i> {e.msg}
                  </small>
                )}
              </div>
            }
          </div>

          {/* <!-- Sign In Form --> */}
          <form onSubmit={handleonSubmit} >
            <div className="mb-4">
              <label htmlFor="email" className="form-label small fw-bold text-secondary">Email Address</label>
              <div className='position-relative'>
                <input type="email" className="form-control py-2 ps-4 rounded-3 border-0 bg-light" name='email' id="email" placeholder="name@example.com" required style={{ fontSize: '0.9rem' }} />
              </div>
            </div>

            <div className="mb-4">
              <div className='d-flex justify-content-between mb-1'>
                <label htmlFor="password" className="form-label small fw-bold text-secondary">Password</label>
                <Link to="/forgotPassword" soft className='nav-link p-0 small text-primary fw-bold'>Forgot?</Link>
              </div>
              <input type="password" className="form-control py-2 ps-4 rounded-3 border-0 bg-light" name='password' id="password" placeholder="••••••••" required style={{ fontSize: '0.9rem' }} />
            </div>

            <button id='login' type="submit" className="btn w-100 py-2 rounded-3 text-white fw-bold shadow-sm transition-smooth border-0 mb-3" style={{ background: 'var(--primary-gradient)' }}>
              Sign In
            </button>
            <div className='text-center mt-3'>
              <small className='text-secondary'>Don't have an account? <Link to="/signup" className='text-primary fw-bold text-decoration-none'>Create one</Link></small>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn
