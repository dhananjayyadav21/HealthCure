import React, { useContext, useEffect, useState } from 'react'
import DoctorCards from '../components/DoctorCards'
import HotspitalCard from '../components/HotspitalCard'
import Footer from "../components/Footer"
import AuthContext from '../context/AuthContext'
import OptimizedImage from '../components/OptimizedImage'

const Home = () => {

  const Context = useContext(AuthContext);
  const { AllDoctors } = Context;

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors();
    // eslint-disable-next-line
  }, []);

  const getDoctors = async () => {
    try {
      let res = await AllDoctors();
      setDoctors(res.AllDoctor);
    } catch (error) {
      console.log(error);
    }
  };

  let Arra = [{}, {}, {}, {}, {}, {}, {}]

  return (
    <div className='bg-light' style={{ minHeight: '100vh' }}>
      {/*================================================= crousal section =================================================*/}
      <section className='py-4 p-md-5' style={{ background: 'var(--secondary-gradient)' }}>
        <div className='container-fluid'>
          <div id="HomeBannerCrousal" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#HomeBannerCrousal" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#HomeBannerCrousal" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#HomeBannerCrousal" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner rounded-4 shadow-lg border-0 overflow-hidden">
              <div className="carousel-item active">
                <OptimizedImage className="w-100" src="/assets/img/Home_banner_1.jpg" alt='1' />
              </div>

              <div className="carousel-item">
                <OptimizedImage className="w-100" src="/assets/img/Home_banner_2.jpg" alt='2' />
              </div>

              <div className="carousel-item">
                <OptimizedImage className="w-100" src="/assets/img/Home_banner_3.jpg" alt='3' />
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#HomeBannerCrousal"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#HomeBannerCrousal"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/*================================= Lets Check =============================*/}
      <section className='px-4 Lets-start-container my-5'>
        <h5 className='mb-4 text-center fw-bold' style={{ color: '#2d3436' }}>Let's start with HealthCure</h5>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4" >
          <div className='premium-card d-flex flex-column justify-content-center align-items-center gap-2 bg-white shadow-sm rounded-4 p-3 cursor-pointer border-0' style={{ width: '120px' }}>
            <div className='p-2 rounded-circle bg-info bg-opacity-10 d-flex align-items-center justify-content-center' style={{ width: '50px', height: '50px' }}>
              <OptimizedImage className='m-0 p-0' objectFit="contain" src="/assets/img/Doctor_3.png" alt="Doctors" />
            </div>
            <small className='fw-bold' style={{ color: '#636e72', fontSize: '0.75rem' }}>Doctors</small>
          </div>

          <div className='premium-card d-flex flex-column justify-content-center align-items-center gap-2 bg-white shadow-sm rounded-4 p-3 cursor-pointer border-0' style={{ width: '120px' }}>
            <div className='p-2 rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center' style={{ width: '50px', height: '50px' }}>
              <OptimizedImage className='m-0 p-0' objectFit="contain" src="/assets/img/apoinment.png" alt="Appointment" />
            </div>
            <small className='fw-bold' style={{ color: '#636e72', fontSize: '0.75rem' }}>Appointment</small>
          </div>

          <div className='premium-card d-flex flex-column justify-content-center align-items-center gap-2 bg-white shadow-sm rounded-4 p-3 cursor-pointer border-0' style={{ width: '120px' }}>
            <div className='p-2 rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center' style={{ width: '50px', height: '50px' }}>
              <OptimizedImage className='m-0 p-0' objectFit="contain" src="/assets/img/sechudle.png" alt="Reschedule" />
            </div>
            <small className='fw-bold' style={{ color: '#636e72', fontSize: '0.75rem' }}>Reschedule</small>
          </div>

          <div className='premium-card d-flex flex-column justify-content-center align-items-center gap-2 bg-white shadow-sm rounded-4 p-3 cursor-pointer border-0' style={{ width: '120px' }}>
            <div className='p-2 rounded-circle bg-warning bg-opacity-10 d-flex align-items-center justify-content-center' style={{ width: '50px', height: '50px' }}>
              <OptimizedImage className='m-0 p-0' objectFit="contain" src="/assets/img/notification.png" alt="Notification" />
            </div>
            <small className='fw-bold' style={{ color: '#636e72', fontSize: '0.75rem' }}>Notification</small>
          </div>
        </div>
      </section>

      {/*================================= Top Doctors =============================*/}
      <section className='container-lg px-3 my-2 my-md-5 Doctor-container'>
        <div className='container-lg text-center'>
          <h4 className='mt-3 mb-2 mt-sm-4 mb-sm-3'>Top Doctor</h4>
          <p className='text-secondary px-5'>End to end care from Top Surgeons at our HealthCure Care Clinics. Emphasizes comprehensive  medical services provided by leading surgeons at HealthCure clinics.</p>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3" >
          <div className='row g-3 w-100'>
            {doctors.map((doctor, index) => {
              let currentIndex = index % 6;
              return <DoctorCards key={index} index={currentIndex} doctor={doctor} />
            })}
          </div>
        </div>
      </section>

      {/*================================= Top Hotspital =============================*/}
      <section className='container-lg px-3 my-5 Hotspital-container'>
        <div className='text-center'>
          <h4 className='mt-3 mb-2 mt-sm-4 mb-sm-3'>Top Hospital</h4>
          <p className='text-secondary px-5'>A top hospital is a premier healthcare institution known for its exceptional medical services, cutting-edge technology, and patient-centered care.</p>
        </div>
        <div className="d-flex justify-content-center justify-content-sm-start align-items-center gap-3" >
          <div className='row g-3'>
            {Arra.map((e, index) => {
              let currentIndex = index % 5;
              return <HotspitalCard key={index} index={currentIndex} />
            })}
          </div>
        </div>
      </section>

      {/*================================= Top Hotspital =============================*/}
      <section className='Footer'>
        <Footer />
      </section>

    </div>
  )
}

export default Home
