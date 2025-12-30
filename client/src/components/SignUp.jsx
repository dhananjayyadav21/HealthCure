import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const SignUp = () => {

   const Context = useContext(AuthContext);
   const { adduser } = Context;
   const [currentRole, setCurrentRole] = useState();
   const [errors, setErrors] = useState([]);
   const navigate = useNavigate();

   //====== handle Form radionChange event for select patient or doctor ==============
   const handleRadioChange = (event) => {
      setCurrentRole(event.target.value);
   };

   //====== handle Form sumbit event ==============
   const handleSubmit = async (event) => {
      event.preventDefault();
      setErrors([]);
      // Target Form
      const formData = new FormData(event.target);
      const formDataObject = {};
      // Each form name and value store as kye,value
      formData.forEach((value, key) => {
         if (formDataObject[key] != null) {
            if (!Array.isArray(formDataObject[key])) {
               let newValueArray = [];
               newValueArray.push(formDataObject[key]);
               newValueArray.push(value);
               formDataObject[key] = newValueArray;
            } else {
               formDataObject[key].push(value);
            }
         } else {
            formDataObject[key] = value;
         }
      });


      try {
         //register user with httpservice
         let res = await adduser(formDataObject);
         if (res?.success === true) {
            toast.success(res.message || 'Account created successfully!');
            navigate("/signin");
         }
      } catch (error) {
         if (error?.response?.data?.errors) {
            setErrors(error?.response?.data?.errors ?? []);
         }
      }

   };

   return (
      <>
         <div className="container d-flex justify-content-center align-items-center p-3 SignUp-Container py-5" style={{ minHeight: '100vh' }}>
            <div className="col-12 col-sm-10 col-lg-7 glass-effect premium-card p-4 p-md-5 border-0">
               {/* <!-- SignUp Header --> */}
               <div className='mb-4 text-center'>
                  <div className='d-inline-flex p-3 rounded-circle bg-primary bg-opacity-10 mb-3'>
                     <i className="fa-solid fa-2x fa-user-plus text-primary"></i>
                  </div>
                  <h3 className="fw-bold mb-1" style={{ color: '#2d3436' }}>Create Account</h3>
                  <p className='text-secondary small'>Join the HealthCure medical community</p>
                  {
                     errors.length !== 0 && <div className='mt-2'>
                        {errors.map((e) => <small className='d-block text-danger py-1'>
                           <i className="fa-solid fa-circle-exclamation me-1"></i> {e.msg}
                        </small>)}
                     </div>
                  }
               </div>

               {/* <!-- SignUp Form --> */}
               <form onSubmit={handleSubmit} id='signupform'>
                  <div className='row'>
                     <div className='col-12 col-md-6 mb-4'>
                        <label htmlFor="name" className="form-label small fw-bold text-secondary">Username</label>
                        <input type="text" className="form-control py-2 ps-3 rounded-3 border-0 bg-light" name='name' id="name" placeholder="John Doe" required style={{ fontSize: '0.9rem' }} />
                     </div>
                     <div className='col-12 col-md-6 mb-4'>
                        <label htmlFor="email" className="form-label small fw-bold text-secondary">Email Address</label>
                        <input type="email" className="form-control py-2 ps-3 rounded-3 border-0 bg-light" name='email' id="email" placeholder="john@example.com" required style={{ fontSize: '0.9rem' }} />
                     </div>
                     <div className='col-12 col-md-6 mb-4'>
                        <label htmlFor="password" className="form-label small fw-bold text-secondary">Password</label>
                        <input type="password" className="form-control py-2 ps-3 rounded-3 border-0 bg-light" name='password' id="password" placeholder="••••••••" required style={{ fontSize: '0.9rem' }} />
                     </div>
                     <div className='col-12 col-md-6 mb-4'>
                        <label htmlFor="confirmPassword" className="form-label small fw-bold text-secondary">Confirm Password</label>
                        <input type="password" className="form-control py-2 ps-3 rounded-3 border-0 bg-light" name='confirmpassword' id="confirmPassword" placeholder="••••••••" required style={{ fontSize: '0.9rem' }} />
                     </div>
                     <div className='col-12 mb-4'>
                        <label className="form-label small fw-bold text-secondary d-block mb-3">Join as</label>
                        <div className="d-flex gap-4">
                           <div className="form-check custom-radio">
                              <input onChange={handleRadioChange} name='role' value="patient" className="form-check-input" type="radio" id="Patient" required />
                              <label className="form-check-label fw-bold py-2 px-4 rounded-3 border cursor-pointer transition-smooth" htmlFor="Patient" style={{ fontSize: '0.9rem' }}>
                                 Patient
                              </label>
                           </div>
                           <div className="form-check custom-radio">
                              <input onChange={handleRadioChange} name='role' value="doctor" className="form-check-input" type="radio" id="Doctor" required />
                              <label className="form-check-label fw-bold py-2 px-4 rounded-3 border cursor-pointer transition-smooth" htmlFor="Doctor" style={{ fontSize: '0.9rem' }}>
                                 Doctor
                              </label>
                           </div>
                        </div>
                     </div>

                     {/*======================================= Doctor Fields ==========================================*/}
                     {currentRole === "doctor" &&
                        <div className='row'>
                           <div className='col-12 col-md-6'>
                              <div className="mb-3">
                                 <small><label htmlFor="specialist" className="form-label">Specialist</label></small>
                                 <input type="text" className="form-control" name='specialist' id="specialist" placeholder="Enter your specialistizations" required />
                              </div>
                           </div>
                           <div className='col-12 col-md-6'>
                              <div className="mb-3">
                                 <small><label htmlFor="hospital" className="form-label">Hostiplal/Clinic Name</label></small>
                                 <input type="text" className="form-control" name='hospital' id="hospital" placeholder="Enter YourHostiplal/Clinic Name" required />
                              </div>
                           </div>
                           <div className='col-12'>
                              <div className="mb-3">
                                 <small><label htmlFor="hospitalAddress" className="form-label">Hostiplal/Clinic Address</label></small>
                                 <input type="text" name='hospitalAddress' className="form-control" id="hospitalAddress" placeholder="Enter YourHostiplal/Clinic Address" required />
                              </div>
                           </div>
                           <div className='col-12 col-md-6'>
                              <div className="mb-3">
                                 <small><label htmlFor="hospitalContact" className="form-label">Hostiplal/Clinic Contact</label></small>
                                 <input type="number" className="form-control" name='hospitalContact' id="hospitalContact" placeholder="Hostiplal/Clinic Contact" required />
                              </div>
                           </div>
                           <div className='col-12 col-md-6'>
                              <div className="mb-3">
                                 <small><label htmlFor="Fees" className="form-label">Fees</label></small>
                                 <input type="number" name='Fees' className="form-control" id="Fees" placeholder="Enter Fees" required />
                              </div>
                           </div>
                           <div className='col-12'>
                              <div className="mb-3">
                                 <small><label htmlFor="weekAvailability" className="form-label">Available in Week</label></small>
                                 <div className="row">
                                    <div className="col-6 col-md-4 form-check">
                                       <input className="form-check-input" type="checkbox" value="Monday" id="mondayCheck" name="weekAvailability" />
                                       <label className="form-check-label" htmlFor="mondayCheck">Monday</label>
                                    </div>
                                    <div className="col-6 col-md-4 form-check">
                                       <input className="form-check-input" type="checkbox" value="Tuesday" id="tuesdayCheck" name="weekAvailability" />
                                       <label className="form-check-label" htmlFor="tuesdayCheck">Tuesday</label>
                                    </div>
                                    <div className="col-6 col-md-4 form-check">
                                       <input className="form-check-input" type="checkbox" value="Wednesday" id="wednesdayCheck" name="weekAvailability" />
                                       <label className="form-check-label" htmlFor="wednesdayCheck">Wednesday</label>
                                    </div>
                                    <div className="col-6 col-md-4 form-check">
                                       <input className="form-check-input" type="checkbox" value="Thursday" id="thursdayCheck" name="weekAvailability" />
                                       <label className="form-check-label" htmlFor="thursdayCheck">Thursday</label>
                                    </div>
                                    <div className="col-6 col-md-4 form-check">
                                       <input className="form-check-input" type="checkbox" value="Friday" id="fridayCheck" name="weekAvailability" />
                                       <label className="form-check-label" htmlFor="fridayCheck">Friday</label>
                                    </div>
                                    <div className="col-6 col-md-4 form-check">
                                       <input className="form-check-input" type="checkbox" value="Saturday" id="saturdayCheck" name="weekAvailability" />
                                       <label className="form-check-label" htmlFor="saturdayCheck">Saturday</label>
                                    </div>
                                    <div className="col-6 col-md-4 form-check">
                                       <input className="form-check-input" type="checkbox" value="Sunday" id="sundayCheck" name="weekAvailability" />
                                       <label className="form-check-label" htmlFor="sundayCheck">Sunday</label>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     }

                     {/*======================================= Patinets fields =========================================*/}
                     {currentRole === "patient" &&
                        <div className='row'>
                           <div className='col-12 col-md-6'>
                              <div className="mb-3">
                                 <small><label htmlFor="Contact" className="form-label">Contact</label></small>
                                 <input type="number" className="form-control" name='contact' id="Contact" placeholder="Enter your Contact" />
                              </div>
                           </div>
                           <div className='col-12 col-md-6'>
                              <div className="mb-3">
                                 <small><label htmlFor="BloodGroup" className="form-label">Blood Group</label></small>
                                 <input type="text" className="form-control" name='bloodgroup' id="BloodGroup" placeholder="Enter BloodGroup" />
                              </div>
                           </div>
                        </div>
                     }
                  </div>
                  <button type="submit" className="btn w-100 py-3 rounded-4 text-white fw-bold shadow-sm transition-smooth border-0 mt-3" style={{ background: 'var(--primary-gradient)' }}>
                     Complete Registration
                  </button>
                  <div className='text-center mt-3'>
                     <small className='text-secondary'>Already have an account? <Link to="/signin" className='text-primary fw-bold text-decoration-none'>Sign in</Link></small>
                  </div>
               </form>
            </div>
         </div>
      </>
   )
}
export default SignUp