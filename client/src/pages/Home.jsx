import React from 'react'
import DoctorCards from '../components/DoctorCards'
import HotspitalCard from '../components/HotspitalCard'

const Home = () => {

   let Arra = [{},{},{},{},{},{},{},]

  return (
    <div className='bg-light'>
      {/*================================================= crousal section =================================================*/}
      <section className='py-3 p-md-4'>
        <div className='container-fluid'>
          <div id="HomeBannerCrousal" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#HomeBannerCrousal" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#HomeBannerCrousal" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#HomeBannerCrousal" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner rounded-4 border border-4 "> 
              <div class="carousel-item active">
                  <img class="" src="assets/img/Home_banner_1.jpg" alt='1'/>
              </div>

              <div class="carousel-item">
                  <img class="" src="assets/img/Home_banner_2.jpg" alt='2'/>
              </div>

              <div class="carousel-item">
                  <img class="" src="assets/img/Home_banner_3.jpg" alt='3'/>
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#HomeBannerCrousal"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#HomeBannerCrousal"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/*================================= Lets Check =============================*/}
      <section className='px-4 Lets-start-container'>
       <h5 className='mt-3 mb-2 mt-sm-4 mb-sm-3 text-secondary d-flex justify-content-center justify-content-sm-start'>Let`s start with HealthCure</h5>
        <div className="d-flex justify-content-center justify-content-sm-start align-items-center gap-3" >
          <div className='d-flex flex-column justify-content-center align-items-center gap-2 bg-light shadow-sm rounded-3 p-2 cursor-pointer'>
              <img className='m-0 p-0' src="assets/img/Doctor_icon.png" alt="Doctors" />
              <small><p className='m-0'>Doctor</p></small>
          </div>

          <div className='d-flex flex-column justify-content-center align-items-center gap-2 bg-light shadow-sm rounded-3 p-2 cursor-pointer'>
              <img className='m-0 p-0' src="assets/img/apoinment.png" alt="Doctors" />
              <small><p className='m-0'>Appoinment</p></small>
          </div>

          <div className='d-flex flex-column justify-content-center align-items-center gap-2 bg-light shadow-sm rounded-3t p-2 cursor-pointer'>
              <img className='m-0 p-0' src="assets/img/sechudle.png" alt="Doctors" />
              <small><p className='m-0'>Shedule</p></small>
          </div>

          <div className='d-flex flex-column justify-content-center align-items-center gap-2 bg-light shadow-sm rounded-3 p-2 cursor-pointer'>
              <img className='m-0 p-0' src="assets/img/notification.png" alt="Doctors" />
              <small><p className='m-0'>Doctor</p></small>
          </div>

        </div>
      </section>

      {/*================================= Top Doctors =============================*/}
      <section className='px-3 mt-5 Doctor-container'>
       <h4 className='mt-3 mb-2 mt-sm-4 mb-sm-3 d-flex justify-content-start'>Top Doctor</h4>
        <div className="d-flex justify-content-center justify-content-sm-start align-items-center gap-3" >
          <div className='row g-3'>
            {Arra.map((e,index)=><DoctorCards key={index}/>)} 
          </div>
        </div>
      </section>

      {/*================================= Top Hotspital =============================*/}
      <section className='px-3 mt-5 Hotspital-container'>
       <h4 className='mt-3 mb-2 mt-sm-4 mb-sm-3 d-flex justify-content-start'>Top Hospital</h4>
        <div className="d-flex justify-content-center justify-content-sm-start align-items-center gap-3" >
          <div className='row g-3'>
            {Arra.map((e,index)=><HotspitalCard key={index}/>)} 
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Home
