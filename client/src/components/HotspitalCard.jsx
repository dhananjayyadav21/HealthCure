import React from 'react'
import OptimizedImage from './OptimizedImage';

const HotspitalCard = (props) => {

  const { index } = props;

  return (
    <>
      <div className="col-sm-6 col-md-3">
        <div className='premium-card d-flex flex-column justify-content-center align-items-center gap-2 cursor-pointer h-100 p-0 overflow-hidden'>
          <div className='Hotspital-img-container w-100' style={{ height: '180px' }}>
            <OptimizedImage className='w-100 h-100' objectFit="cover" src={`/assets/img/Hospital_${index + 1}.jpg`} alt="Hospital" />
          </div>
          <div className='card-body py-3 text-center'>
            <h6 className='m-0 fw-bold' style={{ color: '#2d3436' }}>Shivaji Hospital</h6>
            <p className='m-0 text-secondary' style={{ fontSize: '0.8rem' }}><i className="fa-solid fa-location-dot me-1 text-primary"></i> Thane, Maharashtra</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default HotspitalCard
