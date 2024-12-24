import React from 'react'

const Home = () => {
  return (
    <>
      <section className='m-2 m-md-4 p-0'>
        <div id="HomeBannerCrousal" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#HomeBannerCrousal" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#HomeBannerCrousal" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#HomeBannerCrousal" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
             
            <div class="carousel-item active">
                <img class="rounded-4" src="assets/img/Home_banner_1.jpg" alt='1'/>
            </div>

            <div class="carousel-item">
                <img class="rounded-4" src="assets/img/Home_banner_2.jpg" alt='2'/>
            </div>

            <div class="carousel-item">
                <img class="rounded-4" src="assets/img/Home_banner_3.jpg" alt='3'/>
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
      </section>
    </>
  )
}

export default Home
