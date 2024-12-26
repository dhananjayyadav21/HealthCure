import React from 'react'
import DoctorCards from '../components/DoctorCards'
import HotspitalCard from '../components/HotspitalCard'
import Footer from "../components/Footer"

const Home = () => {

   let Arra = [{},{},{},{},{},{},{},{}]

  return (
    <div className='bg-light'>
      {/*================================================= crousal section =================================================*/}
      <section className='py-3 p-md-4'>
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
            <div className="carousel-inner rounded-2 rounded-md-4 border border-2 "> 
              <div className="carousel-item active">
                  <img className="" src="/assets/img/Home_banner_1.jpg" alt='1'/>
              </div>

              <div className="carousel-item">
                  <img className="" src="/assets/img/Home_banner_2.jpg" alt='2'/>
              </div>

              <div className="carousel-item">
                  <img className="" src="/assets/img/Home_banner_3.jpg" alt='3'/>
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
      <section className='px-4 Lets-start-container'>
       <h5 className=' mb-2 mt-sm-4 mb-sm-3 text-secondary d-flex justify-content-center'>Let`s start with HealthCure</h5>
        <div className="d-flex justify-content-center align-items-center gap-3" >
          <div className='col-md-1 bg-white d-flex flex-column justify-content-center align-items-center gap-2 bg-light shadow rounded-3 p-2 cursor-pointer'>
              <img className='m-0 p-0' src="/assets/img/Doctor_3.png" alt="Doctors" />
              <small><p className='m-0'>Doctor</p></small>
          </div>

          <div className='col-md-1 bg-white d-flex flex-column justify-content-center align-items-center gap-2 bg-light shadow rounded-3 p-2 cursor-pointer'>
              <img className='m-0 p-0' src="/assets/img/apoinment.png" alt="Doctors" />
              <small><p className='m-0'>Appoinment</p></small>
          </div>

          <div className='col-md-1 bg-white d-flex flex-column justify-content-center align-items-center gap-2 bg-light shadow rounded-3 p-2 cursor-pointer'>
              <img className='m-0 p-0' src="/assets/img/sechudle.png" alt="Doctors" />
              <small><p className='m-0'>Reshedule</p></small>
          </div>

          <div className='col-md-1 bg-white d-flex flex-column justify-content-center align-items-center gap-2 bg-light shadow rounded-3 p-2 cursor-pointer'>
              <img className='m-0 p-0' src="/assets/img/notification.png" alt="Doctors" />
              <small><p className='m-0'>Notification</p></small>
          </div>

        </div>
      </section>

      {/*================================= Top Doctors =============================*/}
      <section className='container-md px-3 my-2 my-md-5 Doctor-container'>
        <div className='container-md text-center'>
          <h4 className='mt-3 mb-2 mt-sm-4 mb-sm-3'>Top Doctor</h4>
          <p className='text-secondary'>End to end care from Top Surgeons at our HealthCure Care Clinics. Emphasizes comprehensive  medical services provided by leading surgeons at HealthCure clinics.</p>
        </div> 
        <div className="d-flex justify-content-center justify-content-sm-start align-items-center gap-3" >
          <div className='row g-3'>
            {Arra.map((e,index)=>{
              let currentIndex = index % 6;
              return <DoctorCards key={index} index={currentIndex}/>
          })} 
          </div>
        </div>
      </section>

      {/*================================= Hospital Banner =============================*/}
      <section>
        <div className='container-fluid Hospital-Banner'>
          <img className='border border-3 rounded-4' src="/assets/img/Doctor_banner.jpg" alt="Banner"/>
        </div>
      </section>

      {/*================================= Top Hotspital =============================*/}
      <section className='container-md px-3 my-5 Hotspital-container'>
        <div className='text-center'>
          <h4 className='mt-3 mb-2 mt-sm-4 mb-sm-3'>Top Hospital</h4>
          <p className='text-secondary'>A top hospital is a premier healthcare institution known for its exceptional medical services, cutting-edge technology, and patient-centered care.</p>
        </div>
        <div className="d-flex justify-content-center justify-content-sm-start align-items-center gap-3" >
          <div className='row g-3'>
            {Arra.map((e,index)=>{
            let currentIndex = index % 5;
            return <HotspitalCard key={index} index={currentIndex}/>})} 
          </div>
        </div>
      </section>

      {/*================================= Top Hotspital =============================*/}
      <section className='Footer'>
         <Footer/> 
      </section>
      
    </div>
  )
}

export default Home
