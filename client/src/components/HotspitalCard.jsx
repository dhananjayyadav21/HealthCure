import React from 'react'
import OptimizedImage from './OptimizedImage';

const HotspitalCard = (props) => {

  const { index } = props;

  return (
    <>
      <div className="col-sm-6 col-md-3">
        <div className='bg-white border mx-1 rounded-3 d-flex flex-column justify-content-center align-items-center gap-2 shadow-sm rounded-3 cursor-pointer'>
          <div className='Hotspital-img-container rounded-top-3'>
            <OptimizedImage className='card-img-top rounded-top-3' src={`/assets/img/Hospital_${index + 1}.jpg`} alt="Hospital" />
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
