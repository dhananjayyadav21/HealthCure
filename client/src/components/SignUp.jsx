import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

   const Context = useContext(AuthContext);
   const { adduser } = Context;
   const [currentRole, setCurrentRole] = useState();
    const [errors,setErrors]= useState([]);
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
          alert(res.message);
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
<div className="container d-flex justify-content-center align-items-center p-3 SignUp-Container py-3 py-md-5">
   <div className="form-containe col-12 col-sm-10 col-lg-5 shadow rounded-4 py-4 px-3 p-md-5">
      {/* <!-- SignUp Header --> */}
      <div className='mb-4'>
         <i className="fa-solid fa-2x fa-user my-3"></i>
         <h4 className="text-start mb-1 fw-bold">SignUp</h4>
         <p className='text-secondary'>to continue to HealthCure</p>
         {
            errors.length !== 0 && <div>
            { errors.map((e)=> <small className='d-block text-danger py-1'>
               {e.msg}
            </small>)}
            </div>
         }
      </div>
      
      {/* <!-- SignUp Form --> */}
      <form onSubmit={handleSubmit} id='signupform'>
         <div className='row'>
            <div className='col-12 col-md-6'>
               <div className="mb-3">
                  <small><label htmlFor="name" className="form-label">Username</label></small>
                  <input type="text" className="form-control" name='name' id="name" placeholder="Enter your name"/>
               </div>
            </div>
            <div className='col-12 col-md-6'>
               <div className="mb-3">
                  <small><label htmlFor="email" className="form-label">Email</label></small>
                  <input type="email" className="form-control" name='email' id="email" placeholder="Enter your email"/>
                  <small className='error text-danger'></small>
               </div>
            </div>
            <div className='col-12 col-md-6'>
               <div className="mb-3">
                  <small><label htmlFor="password" className="form-label">Password</label></small>
                  <input type="password" className="form-control" name='password' id="password" placeholder="Enter your password"/>
               </div>
            </div>
            <div className='col-12 col-md-6'>
               <div className="mb-3">
                  <small><label htmlFor="confirmPassword" className="form-label">Confirm Password</label></small>
                  <input type="password" className="form-control" name='confirmpassword' id="confirmPassword" placeholder="Re-enter your password"/>
               </div>
            </div>
            <div className='col-12 col-md-12'>
               <div className="mb-3">
                  <small><label htmlFor="email" className="form-label">Role</label></small>
                  <div className="form-check form-switch">
                     <input onChange={handleRadioChange} name='role' value="patient" className="form-check-input" type="radio" id="Patient"/>
                     <label className="form-check-label" for="Patient">Patient</label>
                  </div>
                  <div className="form-check form-switch">
                     <input onChange={handleRadioChange} name='role' value="doctor" className="form-check-input" type="radio" id="Doctor"/>
                     <label className="form-check-label" for="Doctor">Doctor</label>
                  </div>
               </div>
            </div>

            {/*======================================= Doctor Fields ==========================================*/}
            {currentRole==="doctor" && 
            <div className='row'>
               <div className='col-12 col-md-6'>
                  <div className="mb-3">
                     <small><label htmlFor="specialist" className="form-label">Specialist</label></small>
                     <input type="text" className="form-control" name='specialist' id="specialist" placeholder="Enter your specialistizations" required/>
                  </div>
               </div>
               <div className='col-12 col-md-6'>
                  <div className="mb-3">
                     <small><label htmlFor="hospital" className="form-label">Hostiplal/Clinic Name</label></small>
                     <input type="text" className="form-control" name='hospital' id="hospital" placeholder="Enter YourHostiplal/Clinic Name" required/>
                  </div>
               </div>
               <div className='col-12'>
                  <div className="mb-3">
                     <small><label htmlFor="hospitalAddress" className="form-label">Hostiplal/Clinic Address</label></small>
                     <input type="text" name='hospitalAddress' className="form-control" id="hospitalAddress" placeholder="Enter YourHostiplal/Clinic Address" required/>
                  </div>
               </div>
               <div className='col-12 col-md-6'>
                  <div className="mb-3">
                     <small><label htmlFor="hospitalContact" className="form-label">Hostiplal/Clinic Contact</label></small>
                     <input type="number" className="form-control" name='hospitalContact' id="hospitalContact" placeholder="Hostiplal/Clinic Contact" required/>
                  </div>
               </div>
               <div className='col-12 col-md-6'>
                  <div className="mb-3">
                     <small><label htmlFor="Fees" className="form-label">Fees</label></small>
                     <input type="number" name='Fees' className="form-control" id="Fees" placeholder="Enter Fees" required/>
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
                           <input className="form-check-input" type="checkbox" value="Tuesday" id="tuesdayCheck" name="weekAvailability"/>
                           <label className="form-check-label" htmlFor="tuesdayCheck">Tuesday</label>
                        </div>
                        <div className="col-6 col-md-4 form-check">
                           <input className="form-check-input" type="checkbox" value="Wednesday" id="wednesdayCheck" name="weekAvailability"/>
                           <label className="form-check-label" htmlFor="wednesdayCheck">Wednesday</label>
                        </div>
                        <div className="col-6 col-md-4 form-check">
                           <input className="form-check-input" type="checkbox" value="Thursday" id="thursdayCheck" name="weekAvailability"/>
                           <label className="form-check-label" htmlFor="thursdayCheck">Thursday</label>
                        </div>
                        <div className="col-6 col-md-4 form-check">
                           <input className="form-check-input" type="checkbox" value="Friday" id="fridayCheck" name="weekAvailability" />
                           <label className="form-check-label" htmlFor="fridayCheck">Friday</label>
                        </div>
                        <div className="col-6 col-md-4 form-check">
                           <input className="form-check-input" type="checkbox" value="Saturday" id="saturdayCheck" name="weekAvailability"/>
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
            {currentRole==="patient" && 
            <div className='row'>
               <div className='col-12 col-md-6'>
                  <div className="mb-3">
                     <small><label htmlFor="Contact" className="form-label">Contact</label></small>
                     <input type="number" className="form-control" name='contact' id="Contact" placeholder="Enter your Contact"/>
                  </div>
               </div>
               <div className='col-12 col-md-6'>
                  <div className="mb-3">
                     <small><label htmlFor="BloodGroup" className="form-label">Blood Group</label></small>
                     <input type="text" className="form-control" name='bloodgroup' id="BloodGroup" placeholder="Enter BloodGroup"/>
                  </div>
               </div>
            </div>
            }
         </div>
         <button type="submit" className="btn btn-info text-white fw-bolder w-100">Register</button>
         <small className='d-flex p-1'>Already have an account?<Link to="/signin" className='nav-link fw-normal text-primary'>Sign in</Link></small>
      </form>
   </div>
</div>
</>
)}
export default SignUp