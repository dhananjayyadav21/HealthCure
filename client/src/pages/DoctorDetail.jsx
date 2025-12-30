import React, { useContext, useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import BookSchedule from '../components/BookSchedule'
import AuthContext from '../context/AuthContext'
import OptimizedImage from '../components/OptimizedImage'

const DoctorDetail = () => {

  const Context = useContext(AuthContext);
  const { GetDoctorDetailById } = Context;
  const [doctorDetail, setDoctorDetail] = useState();
  const params = useParams()
  const location = useLocation();

  useEffect(() => {
    getDoctorDetail();
    // eslint-disable-next-line
  }, []);

  const getDoctorDetail = async () => {
    try {
      const doctorId = params.id;
      let res = await GetDoctorDetailById(doctorId);
      setDoctorDetail(res);
      // console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='p-3 p-md-5 DoctorDetail-Container' style={{ background: '#fcfcfc' }}>
        <div className='row'>
          {/* DoctorDetail-left-container  */}
          <section className='col-md-8 DoctorDetail-left-container position-relative'>
            <section className='DoctorDetail-Banner mb-5'>
              <div className='w-100 p-4 premium-card border-0 position-relative overflow-hidden' style={{ background: 'var(--secondary-gradient)', minHeight: '320px' }}>
                <div className='d-flex justify-content-center h-100'>
                  <OptimizedImage
                    src={`/assets/img/Doctor_${(location.state?.doctorImageIndex ?? 5) + 1}.png`}
                    style={{ height: '320px', width: 'auto' }}
                    imageStyle={{ height: '320px', width: 'auto' }}
                    objectFit="contain"
                    alt="Doctor"
                  />
                </div>
                <div className='position-absolute text-center glass-effect p-4 rounded-4 shadow-sm border-0' style={{ bottom: '20px', left: '50%', transform: 'translateX(-50%)', minWidth: '280px', background: 'rgba(255,255,255,0.85)' }}>
                  <h4 className='m-0 fw-bold' style={{ color: '#2d3436' }}>Dr. {doctorDetail?.name}</h4>
                  <p className='text-primary fw-bold text-uppercase m-0 mt-2 small opacity-75' style={{ letterSpacing: '2px' }}>{doctorDetail?.doctorDetails?.specialist}</p>
                </div>
              </div>
            </section>

            <section className='DoctorDetail-Name d-flex justify-content-between align-items-center'>
              <div className='my-3 my-md-5'>
                <h4 className='text-capitalize'>{doctorDetail?.doctorDetails?.specialist}, MBBS, MS</h4>
                <p className='text-secondary mb-2 text-capitalize'>{doctorDetail?.doctorDetails?.hospitalAddress}, {doctorDetail?.doctorDetails?.specialist}</p>
                <small><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> <span className='btn btn-warning rounded-5 mx-2 p-0 px-2 tex-white'>4.9</span></small>
              </div>
            </section>

            <section className='DoctorDetail-About mb-5'>
              <div className='premium-card glass-effect p-4 rounded-4 border-0 shadow-sm'>
                <h6 className='fw-bold mb-3' style={{ color: '#2d3436' }}>
                  <i className="fa-solid fa-user-doctor text-primary me-2"></i> About
                </h6>
                <div className='text-secondary small' style={{ lineHeight: '1.6', textAlign: 'justify' }}>
                  {doctorDetail?.doctorDetails?.about || "As a dedicated and compassionate MBBS doctor, I am committed to providing exceptional healthcare to my patients while continuously advancing my knowledge and skills in the medical field. With a solid foundation in medical sciences and clinical practice, I strive to uphold the highest standards of patient care, ensuring empathy, professionalism, and ethical conduct in every interaction."}
                </div>
              </div>
            </section>

            {/* <div className="d-flex justify-content-md-end d-md-none">
                <Link className='btn btn-info btn-Appointment text-white fw-sm-bold my-3 ' to="/BookSchedule">Book on Appointment</Link>
                </div> */}
          </section>

          {/* DoctorDetail-Right-container  */}
          <section className='col-md-4 DoctorDetail-right-container d-flex justify-content-center'>
            <div className='glass-effect p-4 rounded-4 w-100 shadow-sm border-0'>
              <BookSchedule doctorDetail={doctorDetail} doctorImageIndex={location.state?.doctorImageIndex} />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default DoctorDetail
