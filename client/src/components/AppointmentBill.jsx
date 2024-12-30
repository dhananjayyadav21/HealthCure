import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import HttpService from '../Service/httpservice';

const AppointmentBill = () => {

    const location = useLocation();
    const navigate = useNavigate(); 

    const PatientDetail = location.state;
    const doctorDetail = location?.state?.doctorDetail;
    const vat = 5;
    // doctorDetail.doctorDetails = {...doctorDetail.doctorDetails,Fees:55}

    console.log(location.state)


    const appointmentDataObject = {
        age: PatientDetail.Age,
        weight: PatientDetail.Weight,
        problem: PatientDetail.Problem,
        consultionFees: doctorDetail.doctorDetails?.Fees?? 0,
        totalPay: doctorDetail.doctorDetails?.Fees?? 0+ (doctorDetail.doctorDetails?.Fees??0) * vat/100,
        doctorid: PatientDetail.doctorId,
        date: PatientDetail.day,
        time: PatientDetail.time,
    }

    useEffect(()=>{
        appointment(appointmentDataObject);
    })

     // appointment Using httpService (post) request
    const appointment = async (formDataObject) => {
        try {
        const response = await HttpService.POST(
            "http://localhost:5000/api/appointment/createappointment",
            formDataObject
        );
        return response.data;
        } catch (error) {
        console.error(error?.response?.data?.errors);
        }
    };

  return (
    <>
       <div className='mt-2 mt-md-4'>
            <section className='d-flex justify-content-center align-items-center m-2 m-md-0 mt-md-5'>
                <div className="form-containe col-md-6 rounded-4 shadow-sm bg-light py-4 px-3 p-md-5">
                    {/* <!-- Form --> */}
                    <form className='AppointmentBill-form'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <h5>Patient info:</h5> 
                                    <div className='p-2 rounded-3 d-flex align-items-center AppointmentBill-name'><i className="fa-solid fa-user mx-2"></i> <input type="text" value={PatientDetail?.PatientName} className="form-control" id="problem" placeholder="Name"/> </div>
                                </div>
                            </div>   
                            <div className='col-12'>
                                <div className="mb-3">
                                    <div className='border p-3 rounded-3 AppointmentBill-Patientdetails'>
                                        <h5>Patient details</h5>
                                        <div className='d-flex justify-content-between text-secondary'>
                                            <p className='m-0'>Consultion Fees</p> 
                                            <p className='m-0'>${doctorDetail.doctorDetails?.Fees??0}</p>
                                        </div> 
                                        <div className='d-flex justify-content-between text-secondary'>
                                            <p className='m-0'>Vat <span>({vat}%)</span></p> 
                                            <p className='m-0'>${(doctorDetail.doctorDetails?.Fees??0) * vat/100}</p>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-between'>
                                            <h5>Total Payable</h5>
                                            <h5 className='fw-bold'>${doctorDetail.doctorDetails?.Fees?? 0+ (doctorDetail.doctorDetails?.Fees??0) * vat/100}</h5>
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
                                        <h5>How would you like to pay?</h5>
                                        <p className='text-secondary'>To make a payment, tap your desired payment method</p>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="VisaCard" id="VisaCard" checked/>
                                            <label className="form-check-label" for="VisaCard">
                                                Visa 
                                            </label>
                                            </div>
                                            <div className="form-check">
                                            <input className="form-check-input" type="radio" name="Mastercard" id="Mastercard" />
                                            <label className="form-check-label" for="Mastercard">
                                                Mastercard
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-info text-white fw-bolder fs-4 w-100"><Link className='nav-link' to="/">Pay with visa</Link></button>
                    </form>
                </div>
            </section>
       </div> 
    </>
  )
}

export default AppointmentBill
