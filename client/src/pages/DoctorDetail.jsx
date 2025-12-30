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
              <div className='w-100 p-3 premium-card border-0 position-relative overflow-hidden' style={{ background: 'var(--secondary-gradient)', minHeight: '280px' }}>
                <OptimizedImage
                  src={`/assets/img/Doctor_${(location.state?.doctorImageIndex ?? 5) + 1}.png`}
                  style={{ height: '280px', borderRadius: '1rem' }}
                  imageStyle={{ height: '280px', borderRadius: '1rem' }}
                  objectFit="contain"
                  alt="Doctor"
                />
                <div className='position-absolute text-center glass-effect p-3 rounded-4 shadow-sm' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: '240px' }}>
                  <h4 className='m-0 fw-bold' style={{ color: '#2d3436' }}>Dr. {doctorDetail?.name}</h4>
                  <p className='text-primary fw-bold text-uppercase m-0 mt-1' style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>{doctorDetail?.doctorDetails?.specialist}</p>
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

            <section className='DoctorDetail-About'>
              <div>
                <h6>About</h6>
                <small><p className='text-secondary'>As a dedicated and compassionate MBBS doctor, I am committed to providing exceptional healthcare to my patients while continuously advancing my knowledge and skills in the medical field. With a solid foundation in medical sciences and clinical practice, I strive to uphold the highest standards of patient care, ensuring empathy, professionalism, and ethical conduct in every interaction. <br /><br />

                  My journey as a medical professional began with rigorous academic training and hands-on clinical exposure during my MBBS program. This comprehensive education equipped me with expertise in diagnosing, treating, and managing a wide range of medical conditions. From general medicine to specialized procedures, I have developed a well-rounded understanding of patient care, emphasizing a holistic approach that considers not just the physical symptoms but also the emotional and psychological well-being of my patients. <br /><br />

                  Throughout my career, I have prioritized building strong relationships with patients, fostering trust and open communication to better understand their concerns and deliver personalized care. My ability to listen actively and explain complex medical concepts in a clear and compassionate manner has been instrumental in helping patients make informed decisions about their health.<br /> <br />

                  In addition to patient care, I am deeply committed to continuous learning and staying updated with the latest advancements in medical science. This dedication allows me to implement evidence-based practices and innovative treatments, ensuring my patients receive the best possible care. My participation in medical conferences, workshops, and ongoing professional development programs reflects my passion for lifelong learning and growth in the ever-evolving field of medicine. <br /><br />

                  Beyond clinical practice, I am also an advocate for preventive healthcare and public health awareness. I believe in empowering individuals and communities with knowledge to make healthier lifestyle choices and reduce the burden of preventable diseases. Whether through health camps, community outreach programs, or educational initiatives, I actively contribute to promoting wellness and improving overall healthcare accessibility.<br /><br />

                  Working effectively in a team setting is another aspect of my professional philosophy. I recognize the importance of collaboration with fellow healthcare professionals, nurses, and support staff to deliver comprehensive and efficient care. My adaptability, problem-solving abilities, and commitment to teamwork ensure a seamless and patient-centered approach in all medical settings.<br /><br />

                  As I continue my journey in medicine, I aspire to specialize further in a field that aligns with my interests and strengths, contributing to advancements in healthcare and making a meaningful impact on the lives of my patients. Each day brings new challenges and learning opportunities, and I approach them with unwavering determination and a genuine desire to make a difference.<br /><br />

                  In summary, being a doctor is not just a profession for me; it is a calling that reflects my dedication to healing and serving humanity. With integrity, empathy, and a relentless pursuit of excellence, I am driven to uphold the noble ideals of medicine and contribute positively to the well-being of individuals and society.</p></small>
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
