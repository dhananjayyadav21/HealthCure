import React from 'react'
import { Link } from 'react-router-dom'

const AppointmentBill = () => {
  return (
    <>
       <section className='d-flex justify-content-between align-items-center m-2 m-md-0'>
            <div className="form-containe col-12 rounded-4 shadow-sm bg-light py-4 px-3 p-md-5">
                {/* <!-- Form --> */}
                <form className='AppointmentBill-form'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="mb-3">
                                <h5>Patient info:</h5> 
                                <div className='p-2 rounded-3 d-flex align-items-center AppointmentBill-name'><i class="fa-solid fa-user mx-2"></i> <input type="text" className="form-control" id="problem" placeholder="Name"/> </div>
                            </div>
                        </div>   
                        <div className='col-12'>
                            <div className="mb-3">
                                <div className='border p-3 rounded-3 AppointmentBill-Patientdetails'>
                                    <h5>Patient details</h5>
                                    <div className='d-flex justify-content-between text-secondary'>
                                        <p className='m-0'>Consultion Fees</p> 
                                        <p className='m-0'>$55</p>
                                    </div> 
                                    <div className='d-flex justify-content-between text-secondary'>
                                        <p className='m-0'>Vat <span>(5%)</span></p> 
                                        <p className='m-0'>$4.5</p>
                                    </div>
                                    <hr />
                                    <div className='d-flex justify-content-between'>
                                        <h5>Total Payable</h5>
                                        <h5 className='fw-bold'>$59.5</h5>
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
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="VisaCard" id="VisaCard" checked/>
                                        <label class="form-check-label" for="VisaCard">
                                            Visa 
                                        </label>
                                        </div>
                                        <div class="form-check">
                                        <input class="form-check-input" type="radio" name="Mastercard" id="Mastercard" />
                                        <label class="form-check-label" for="Mastercard">
                                            Mastercard
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-info text-white fw-bolder fs-4 w-100"><Link className='nav-link' to="/ppointmentBill">Pay with visa</Link></button>
                </form>
            </div>
        </section>
    </>
  )
}

export default AppointmentBill
