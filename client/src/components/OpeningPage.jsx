import React from 'react'
import { Link } from 'react-router-dom'
import OptimizedImage from './OptimizedImage';

const OpeningPage = () => {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column justify-content-between align-items-center text-center px-4 py-5" style={{ background: '#ffffff' }}>
        <div className='w-100 flex-grow-1 d-flex align-items-center justify-content-center'>
          <OptimizedImage
            src="/assets/img/Home.png"
            objectFit="contain"
            alt="Home Illustration"
            style={{ width: '100%', height: '45vh' }}
          />
        </div>

        <div className="mt-4 mb-5">
          <h4 className='fw-bold' style={{ color: '#2d3436', lineHeight: '1.2' }}>
            Schedule <span className='text-primary'>appointments</span> <br />
            with expert doctors!
          </h4>
          <p className='text-secondary mt-3 small mx-auto' style={{ maxWidth: '400px' }}>
            Easily book appointments with top-rated doctors <br className="d-none d-md-block" />
            in various specialties and manage your health efficiently.
          </p>
        </div>

        <Link to="/welcomePage" className="w-100" style={{ maxWidth: '350px' }}>
          <button className='btn btn-primary-gradient border-0 rounded-pill py-3 fw-bold shadow-sm w-100 transition-smooth uppercase' style={{ background: 'var(--primary-gradient)', letterSpacing: '1px' }}>
            Get Started <i className="fa-solid fa-chevron-right ms-2"></i>
          </button>
        </Link>
      </div>
    </>
  )
}

export default OpeningPage
