import React, { useState } from 'react'

const SignUp = () => {

const[currentRole, setCurrentRole] = useState();

const handleRadioChange = (event) => {
setCurrentRole(event.target.value);
console.log(event.target.value); // Print the current value
};

const handleSubmit = (event) => {
event.preventDefault();
const formData = new FormData(event.target);
// Convert FormData to an object for easier logging
const dataObject = {};
formData.forEach((value, key) => {
   if (dataObject[key]!=null) {
      let newArrayValue = [];
      if (typeof dataObject[key] == Array) {
         newArrayValue = [...dataObject[key],value];
      }else{
         newArrayValue.push(dataObject[key])
      }
      
      dataObject[key] = newArrayValue;
   }else{
      dataObject[key] = value;
   }
});
// Print all form data to the console
console.log("Form Data Submitted:", dataObject);
};

return (
<>
<div className="container d-flex justify-content-center align-items-center p-3 SignUp-Container mt-3 mt-md-5">
   <div className="form-containe col-12 col-md-5 shadow rounded-4 py-4 px-3 p-md-5">
      {/* <!-- SignUp Header --> */}
      <div className='mb-4'>
         <i className="fa-solid fa-2x fa-user my-3"></i>
         <h4 className="text-start mb-1 fw-bold">SignUp</h4>
         <p className='text-secondary'>to continue to HealthCure</p>
      </div>
      {/* <!-- SignUp Form --> */}
      <form noValidate onSubmit={handleSubmit}>
         <div className='row'>
            <div className='col-12 col-md-6'>
               <div className="mb-3">
                  <small><label htmlFor="username" className="form-label">Username</label></small>
                  <input type="text" className="form-control" name='username' id="username" placeholder="Enter your username"/>
               </div>
            </div>
            <div className='col-12 col-md-6'>
               <div className="mb-3">
                  <small><label htmlFor="email" className="form-label">Email</label></small>
                  <input type="email" className="form-control" name='email' id="email" placeholder="Enter your email"/>
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
                  <div class="form-check form-switch">
                     <input onChange={handleRadioChange} name='role' value="patient" class="form-check-input" type="radio" id="Patient"/>
                     <label class="form-check-label" for="Patient">Patient</label>
                  </div>
                  <div class="form-check form-switch">
                     <input onChange={handleRadioChange} name='role' value="doctor" class="form-check-input" type="radio" id="Doctor"/>
                     <label class="form-check-label" for="Doctor">Doctor</label>
                  </div>
               </div>
            </div>

            {/*======================================= Doctor Fields ==========================================*/}
            {currentRole==="doctor" && 
            <div className='row'>
               <div className='col-12 col-md-6'>
                  <div className="mb-3">
                     <small><label htmlFor="specialist" className="form-label">Specialist</label></small>
                     <input type="text" className="form-control" name='specialist' id="specialist" placeholder="Enter your specialistizations"/>
                  </div>
               </div>
               <div className='col-12 col-md-6'>
                  <div className="mb-3">
                     <small><label htmlFor="hospital" className="form-label">Hostiplal/Clinic Name</label></small>
                     <input type="text" className="form-control" name='hospital' id="hospital" placeholder="Enter YourHostiplal/Clinic Name"/>
                  </div>
               </div>
               <div className='col-12'>
                  <div className="mb-3">
                     <small><label htmlFor="hospitalAddress" className="form-label">Hostiplal/Clinic Address</label></small>
                     <input type="text" name='hospitalAddress' className="form-control" id="hospitalAddress" placeholder="Enter YourHostiplal/Clinic Address"/>
                  </div>
               </div>
               <div className='col-12 col-md-6'>
                  <div className="mb-3">
                     <small><label htmlFor="hospitalContact" className="form-label">Hostiplal/Clinic Contact</label></small>
                     <input type="tel" className="form-control" id="hospitalContact" placeholder="Hostiplal/Clinic Contact"/>
                  </div>
               </div>
               <div className='col-12 col-md-6'>
                  <div className="mb-3">
                     <small><label htmlFor="Fees" className="form-label">Fees</label></small>
                     <input type="number" className="form-control" id="Fees" placeholder="Enter Fees"/>
                  </div>
               </div>
               <div className='col-12'>
                  <div className="mb-3">
                     <small><label htmlFor="weekAvailability" className="form-label">Available in Week</label></small>
                     <div className="row">
                        <div className="col-6 col-md-4 form-check">
                           <input className="form-check-input" type="checkbox" value="Monday" id="mondayCheck" name="dayAvailable"/>
                           <label className="form-check-label" htmlFor="mondayCheck">Monday</label>
                        </div>
                        <div className="col-6 col-md-4 form-check">
                           <input className="form-check-input" type="checkbox" value="Tuesday" id="tuesdayCheck" name="dayAvailable"/>
                           <label className="form-check-label" htmlFor="tuesdayCheck">Tuesday</label>
                        </div>
                        <div className="col-6 col-md-4 form-check">
                           <input className="form-check-input" type="checkbox" value="Wednesday" id="wednesdayCheck" name="dayAvailable"/>
                           <label className="form-check-label" htmlFor="wednesdayCheck">Wednesday</label>
                        </div>
                        <div className="col-6 col-md-4 form-check">
                           <input className="form-check-input" type="checkbox" value="Thursday" id="thursdayCheck" name="dayAvailable"/>
                           <label className="form-check-label" htmlFor="thursdayCheck">Thursday</label>
                        </div>
                        <div className="col-6 col-md-4 form-check">
                           <input className="form-check-input" type="checkbox" value="Friday" id="fridayCheck" name="dayAvailable"/>
                           <label className="form-check-label" htmlFor="fridayCheck">Friday</label>
                        </div>
                        <div className="col-6 col-md-4 form-check">
                           <input className="form-check-input" type="checkbox" value="Saturday" id="saturdayCheck" name="dayAvailable"/>
                           <label className="form-check-label" htmlFor="saturdayCheck">Saturday</label>
                        </div>
                        <div className="col-6 col-md-4 form-check">
                           <input className="form-check-input" type="checkbox" value="Sunday" id="sundayCheck" name="dayAvailable"/>
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
                     <input type="tel" className="form-control" name='contact' id="Contact" placeholder="Enter your Contact"/>
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
         <button type="submit" className="btn btn-info text-white fw-bolder w-100">
            Register
         </button>
      </form>
   </div>
</div>
</>
)}
export default SignUp