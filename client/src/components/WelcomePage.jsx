import React from 'react'
import { Link } from 'react-router-dom'
import OptimizedImage from './OptimizedImage';

const WelcomePage = () => {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column justify-content-between align-items-center text-center px-4 py-5" style={{ background: '#ffffff' }}>
        <div className='w-100 flex-grow-1 d-flex align-items-center justify-content-center mb-4'>
          <OptimizedImage
            src="/assets/img/Doctorr.png"
            objectFit="contain"
            alt="Welcome Doctor"
            style={{ width: '100%', height: '45vh' }}
          />
        </div>

        <div className="mb-5">
          <h2 className='text-primary fw-bold mb-2' style={{ letterSpacing: '-0.5px' }}>HealthCure</h2>
          <p className='text-secondary fw-medium small mb-0'>Your trusted partner for modern healthcare</p>
        </div>

        <div className='w-100 d-flex flex-column gap-3 mb-4' style={{ maxWidth: '350px' }}>
          <Link to="/signin" className="w-100">
            <button className='btn btn-primary-gradient border-0 rounded-pill py-3 fw-bold shadow-sm w-100 transition-smooth' style={{ background: 'var(--primary-gradient)' }}>
              Sign In <i className="fa-solid fa-arrow-right-to-bracket ms-2"></i>
            </button>
          </Link>
          <Link to="/signup" className="w-100">
            <button className='btn btn-outline-primary border-2 rounded-pill py-3 fw-bold w-100 transition-smooth bg-transparent' style={{ color: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>
              Create Account <i className="fa-solid fa-user-plus ms-2"></i>
            </button>
          </Link>
        </div>

        <p className="text-muted small mb-0" style={{ maxWidth: '300px' }}>
          Join thousands of patients accessing world-class healthcare at their fingertips.
        </p>
      </div>
    </>
  )
}

export default WelcomePage
