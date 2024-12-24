import React from 'react'
import { Link } from 'react-router-dom'
import BookSedule from '../components/BookSedule'

const DoctorDetail = () => {
  return (
    <>
      <div className='p-2 p-md-4 DoctorDetail-Container '>
         
        <div className='row'>
            {/* DoctorDetail-left-container  */}
            <section className='col-md-8 DoctorDetail-left-container potion-relative'>
                <section className='DoctorDetail-Banner'>
                    <div className='w-100 px-2 pt-2 border rounded-4 bg-light position-relative'>
                        <img src="assets/img/Doctor_5.png" alt="Doctor" />
                        <div className='position-absolute text-xenter'>
                            <h5>Dr. Cyden Stack</h5>
                            <p className='text-secondary'>Sr. Dental Specialist</p>
                        </div>
                    </div>
                </section>

                <section className='DoctorDetail-Name d-flex justify-content-between align-items-center'>
                    <div className='my-3 my-md-5'>
                    <h4>Medicine & Dental Specialist</h4>
                    <p className='text-secondary mb-2'>Good health clinic, MBBC, FCPS</p>
                    <small><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> <span className='btn btn-warning rounded-5 mx-2 p-0 px-2 tex-white'>4.9</span></small>
                    </div>
                    {/* <div className="">
                    <Link className='btn btn-info text-white fw-sm-bold px-5 my-3 ' to="/">Book on Appointment</Link>
                    </div> */}
                </section>

                <section className='DoctorDetail-About'>
                <div>
                    <h6>About</h6>
                    <small><p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non dolorem alias velit praesentium ex, possimus ducimus est impedit optio reiciendis veniam amet, sapiente odio libero officia obcaecati at cumque rerum sed, magni quo facilis. Magnam amet blanditiis assumenda, repudiandae debitis reiciendis. Ipsam cum incidunt esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae debitis, dicta necessitatibus voluptates amet delectus odit consequuntur voluptate cupiditate placeat totam optio, perferendis impedit iure corporis! Minima veniam dolor molestias, ea iste vel sequi ducimus alias nihil magni fugit tenetur dicta odio accusantium sint quam voluptates officia deserunt nemo debitis quos. Laborum corporis eligendi, nesciunt dolore beatae, fugit ipsum officiis modi culpa dicta minima asperiores recusandae numquam unde aliquam excepturi aspernatur perspiciatis, quod hic distinctio ratione impedit iusto tenetur. Quae, vero error eius veritatis ea quod similique quasi libero nemo at itaque tempora nobis sunt magni soluta impedit quisquam! Harum repellat natus quis saepe soluta vel minus similique suscipit! Repellendus reiciendis nulla impedit sequi pariatur officiis eaque, tempore perferendis excepturi vero adipisci consequatur libero minus quia id quibusdam, dolor corrupti deserunt voluptates laboriosam autem veniam omnis? Optio beatae perspiciatis debitis sint possimus totam tenetur doloribus nostrum inventore iste atque illo pariatur vel perferendis nihil hic suscipit quae, id praesentium. Corrupti debitis sequi consequatur culpa rem quia delectus doloremque reprehenderit corporis, hic, doloribus fugit odit fugiat? Commodi, provident quia modi a explicabo hic iste officiis beatae nihil vero praesentium laboriosam minus facilis repudiandae quidem pariatur. Nostrum libero minus consectetur praesentium maiores odit enim vel ea illum sunt suscipit laborum odio beatae a dolores id autem, quaerat voluptate. Recusandae, eius maiores ad, minima porro numquam in fugiat nostrum non, ea culpa iusto architecto laboriosam quaerat minus nobis repellat eum voluptatem? Quis ipsum, porro cum voluptate libero perspiciatis non fugiat ducimus asperiores quibusdam.</p></small>
                </div>
                </section>

                <div className="d-flex justify-content-md-end d-md-none">
                <Link className='btn btn-info btn-Appointment text-white fw-sm-bold my-3 ' to="/BookSedule">Book on Appointment</Link>
                </div>
            </section>  

            {/* DoctorDetail-Right-container  */}  
            <section className='col-md-4 DoctorDetail-right-container d-flex justify-content-center d-none d-md-flex'>
                <div className='bg-light p-4 rounded-4'>
                    <BookSedule/>
                </div>
            </section>
        </div>   
      </div>
    </>
  )
}

export default DoctorDetail
