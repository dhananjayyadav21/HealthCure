import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

const AppointmentBill = () => {

    const location = useLocation(); 
    const Context = useContext(AuthContext);
    const {appointment } = Context;

    const PatientDetail = location.state;
    const doctorDetail = location?.state?.doctorDetail;
    const vat = 5;

    const appointmentDataObject = {
        patientname: PatientDetail?.PatientName,
        age: PatientDetail?.Age,
        weight: PatientDetail?.Weight,
        problem: PatientDetail?.Problem,
        consultionFees: doctorDetail?.doctorDetails?.Fees?? 0,
        totalPay: doctorDetail?.doctorDetails?.Fees?? 0+ (doctorDetail?.doctorDetails?.Fees??0) * vat/100,
        doctorid: PatientDetail?.doctorId,
        doctorname: doctorDetail?.name,
        doctorspecialist: doctorDetail?.doctorDetails?.specialist,
        date: PatientDetail?.day,
        time: PatientDetail?.time,
    }

   const handleClick = async ()=>{
     let res = await appointment(appointmentDataObject);
     if(res?.success === true){
        alert("Your Appointment Book");
     }else{
        alert("Somthing went wrong!, please try again");
     }
   }


  return (
    <>
       <div className='pt-2 px-md-4'>
            <section className='d-flex justify-content-center align-items-center m-2 mt-md-3'>
                <div className="form-containe col-lg-8 rounded-4 shadow-sm bg-light p-4 px-3 p-md-5">
                    {/* <!-- Form --> */}
                    <form className='AppointmentBill-form'>
                        <div className='row'>
                        <div className='col-12'>
                                <div className="mb-3">
                                    <div className='border p-3 rounded-3 shadow-sm AppointmentBill-Patientdetails'>
                                        <h6 className='m-0'><i className="fa-solid fa-user mx-2"></i> Appointment info:</h6>
                                    </div>
                                </div>
                            </div>   
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <div className='border p-3 rounded-3 shadow-sm AppointmentBill-Patientdetails'>
                                        <h6>Patient info:</h6>
                                        <div className="text-secondary" >
                                            <div className='d-flex'>
                                                <p className="m-1 w-25">Name</p>
                                                <p className='m-1 text-capitalize'>: {PatientDetail?.PatientName}</p>
                                            </div>
                                            <div className='d-flex'>
                                                <p className="m-1 w-25">Age</p>
                                                <p className='m-1'>:  {PatientDetail?.Age}</p>
                                            </div>
                                            <div className='d-flex'>
                                                <p className="m-1 w-25">Weight </p>
                                                <p className='m-1'>: {PatientDetail?.Weight}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <div className='border p-3 rounded-3 shadow-sm AppointmentBill-Patientdetails'>
                                        <h6>Doctor info:</h6>
                                        <div className="text-secondary" >
                                            <div className='d-flex'>
                                                <p className="m-1 w-25">Name</p>
                                                <p className='m-1 text-capitalize'>: {doctorDetail?.name}</p>
                                            </div>
                                            <div className='d-flex'>
                                                <p className="m-1 w-25">Contact</p>
                                                <p className='m-1 text-capitalize'>: {doctorDetail?.doctorDetails?.hospitalContact ?doctorDetail?.doctorDetails?.hospitalContact : "210 456 8695"}</p>
                                            </div>
                                            <div className='d-flex'>
                                                <p className="m-1 w-25">Hospital</p>
                                                <p className='m-1 text-capitalize'>: {doctorDetail?.doctorDetails?.hospital}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className='col-12'>
                                <div className="mb-3">
                                    <div className='border p-3 rounded-3 AppointmentBill-Patientdetails'>
                                        <h6>Patient details</h6>
                                        <div className='d-flex justify-content-between text-secondary'>
                                            <p className='m-0'>Consultion Fees</p> 
                                            <p className='m-0'>${doctorDetail?.doctorDetails?.Fees??0}</p>
                                        </div> 
                                        <div className='d-flex justify-content-between text-secondary'>
                                            <p className='m-0'>Vat <span>({vat}%)</span></p> 
                                            <p className='m-0'>${(doctorDetail?.doctorDetails?.Fees??0) * vat/100}</p>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-between'>
                                            <h6>Total Payable</h6>
                                            <h6 className='fw-bold'>${(doctorDetail?.doctorDetails?.Fees?? 0) + ((doctorDetail?.doctorDetails?.Fees??0) * vat/100)}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <div className='border p-3 rounded-3 cursor-pointer AppointmentBill-promocode'>
                                        <div className='d-flex justify-content-between text-secondary'>
                                            <p className='m-0'>Do you have any promo card</p> 
                                            <p className='m-0'>{`>`}</p>
                                        </div> 
                                    </div> 
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <div className='border p-3 rounded-3 AppointmentBill-payment'>
                                        <h6>How would you like to pay?</h6>
                                        <p className='text-secondary'>To make a payment, tap your desired payment method</p>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="card" id="VisaCard" required/>
                                            <label className="form-check-label" for="VisaCard">
                                                Visa 
                                            </label>
                                        </div>
                                        <div className="form-check">     
                                            <input className="form-check-input" type="radio" name="card" id="Mastercard" required/>
                                            <label className="form-check-label" for="Mastercard">
                                                Mastercard
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleClick} type="submit" className="btn btn-info text-white fw-bolder fs-6 w-100"><Link className='nav-link' to="/">Pay with card</Link></button>
                    </form>
                </div>
            </section>
       </div> 
    </>
  )
}

export default AppointmentBill
