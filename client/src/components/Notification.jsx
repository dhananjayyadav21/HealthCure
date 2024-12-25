import React from 'react'

const Notification = () => {
  return (
    <>
        <div className='container-fluid my-3'>
          <h5 className="card-text p-3">
          <i class="fa-solid error-icon fa-circle-exclamation"></i> You missed your scheduled appointment. Please reschedule at your earliest convenience to ensure timely care.
          </h5>
         <div className='row g-2'>
          {[{},{},{},{},{},{},{},{},{},].map(()=>
            <div className="col-md-4">
              <div className="mx-2 d-flex align-items-center border rounded shadow-sm p-3 mb-3 bg-light" style={{ maxWidth:'500px',  margin:'auto'}}>
                <img src="assets/img/Doctor_3.png"  alt="Doctor"  className="rounded-circle me-3" style={{ width: '60px', height: '60px', objectFit: 'contain'}}/>
                <div className="flex-grow-1">
                  <h6 className="mb-1 text-danger">Missed Appointment</h6>
                  <p className="mb-1">
                    <strong>doctorname</strong> - doctorspecialty<br />
                    <span className="text-muted">doctordate at doctortime</span>
                  </p>
                  <button className="btn btn-info text-white btn-sm">Reschedule</button>
                </div>
              </div>
            </div>)}
         </div>
      </div>
    </>
  )
}

export default Notification
