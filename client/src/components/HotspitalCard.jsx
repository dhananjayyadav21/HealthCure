import React from 'react'

const HotspitalCard = () => {
  return (
    <>

      <div className="col-sm-6 col-md-3">
            <div className='mx-1 rounded-3 d-flex flex-column justify-content-center align-items-center gap-2 shadow-sm rounded-3 cursor-pointer'>
                <div className='Hotspital-img-container rounded-top-3'>
                    <img className='card-img-top' src="assets/img/Hospital.png" alt="Hospital" />
                </div>  
                <div className='card-body py-2 text-center'>
                    <h6 className='m-0'>Shivaji Hospital</h6>
                    <small><p className='m-0 text-secondary'>Thane</p></small>
                </div>
            </div>
        </div>

    </>
  )
}

export default HotspitalCard
