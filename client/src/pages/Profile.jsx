// Import necessary libraries
import React from 'react';

const UserProfile = () => {
  return (
    <>
        <div className='bg-light' style={{minHeight:"100vh"}}>
            <div className='container-md py-2 py-md-4'>
                <div className='row'>
                    <section className='col-md-4 my-3'> 
                        <div className='bg-white rounded-3 shadow' >
                            <div className='p-5'>
                                <div className='d-flex justify-content-center'>
                                    <div style={{width:"150px"}}>
                                    <img className='bg-light' src="/assets/img/Doctor_4.png" alt="User-img" style={{width:"100%",borderRadius:"50%"}} />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h3 className="my-3 my-md-4">Dr. John Doe</h3>
                                    <h6 className="text-secondary my-2">Cardiologist</h6>
                                    <h6 className="text-secondary">Bay Area, San Francisco, CA</h6>
                                    <button className='btn btn-danger my-3 px-4'>Logout</button>
                                </div> 
                            </div>
                        </div>
                    </section>

                    <section className='col-md-8 my-3' > 
                        <div className='bg-white rounded-3 shadow' >
                            <div className='p-4 text-muted'>
                                <div className='d-flex'>
                                    <h6 className='w-25'>Full Name</h6>
                                    <h6>: Dr. John Doe</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Email</h6>
                                    <h6>: example@example.com</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Phone</h6>
                                    <h6>: (097) 234-5678</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Mobile</h6>
                                    <h6>: (098) 765-4321</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Address</h6>
                                    <h6>: Bay Area, San Francisco, CA</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>role</h6>
                                    <h6>: Doctor</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>specialist</h6>
                                    <h6>: Cardiologist</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Fees</h6>
                                    <h6>: 400</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Shift</h6>
                                    <h6>: Morning</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Day</h6>
                                    <h6>: Monday</h6>
                                </div>
                            </div> 
                        </div>
                    </section>
                    </div>
            </div>
        </div>  
    </> 
  );
};

export default UserProfile;

