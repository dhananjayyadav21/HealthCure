import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {

    const Context = useContext(AuthContext);
    const { UserDetails,userinfo } = Context;
    const navigate = useNavigate();

    useEffect(()=>{
        UserDetails();
        // eslint-disable-next-line
    },[])

    const Logout = ()=>{
        localStorage.removeItem('AuthToken');
        navigate('/');
    }

  return (
    <>
        <div className='bg-light' style={{minHeight:"100vh"}}>
            <div className='container-md py-2 py-md-4'>
                <div className='row'>
                    <section className='col-md-4 my-3'> 
                        <div className='bg-white rounded-3 shadow' >

                        {userinfo?.user?.role === "doctor"  &&    <div className='p-5'>
                                <div className='d-flex justify-content-center'>
                                    <div style={{width:"150px"}}>
                                    <img className='bg-light' src="/assets/img/Doctor_4.png" alt="User-img" style={{width:"100%",borderRadius:"50%"}} />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h3 className="my-3 my-md-4 text-capitalize">{userinfo?.user?.name}</h3>
                                    <h6 className="text-secondary my-2 text-capitalize">{userinfo?.Doctor?.specialist}</h6>
                                    <h6 className="text-secondary text-capitalize">{userinfo?.Doctor?.hospital}</h6>
                                    <button className='btn btn-danger my-3 px-4' onClick={Logout} >Logout</button>
                                </div> 
                            </div>}

                            {userinfo?.user?.role === "patient"  &&  <div className='p-5'>
                                <div className='d-flex justify-content-center'>
                                    <div style={{width:"150px"}}>
                                    <img className='bg-light' src="/assets/img/Doctor_4.png" alt="User-img" style={{width:"100%",borderRadius:"50%"}} />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h3 className="my-3 my-md-4 text-capitalize">{userinfo?.user?.name}</h3>
                                    <h6 className="text-secondary my-2">{userinfo?.user?.email}</h6>
                                    <h6 className="text-secondary text-capitalize">{userinfo?.user?.role}</h6>
                                    <button className='btn btn-danger my-3 px-4' onClick={Logout} >Logout</button>
                                </div> 
                            </div>}
                        </div>
                    </section>

                    {userinfo?.user?.role === "doctor"  &&  <section className='col-md-8 my-3' > 
                        <div className='bg-white rounded-3 shadow' >
                            <div className='p-4 text-muted'>
                                <div className='d-flex'>
                                    <h6 className='w-25'>Full Name</h6>
                                    <h6 className='text-capitalize'>: {userinfo?.user?.name}</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Email</h6>
                                    <h6>: {userinfo?.user?.email}</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>role</h6>
                                    <h6 className='text-capitalize'>: {userinfo?.user?.role}</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>specialist</h6>
                                    <h6 className='text-capitalize'>: {userinfo?.Doctor?.specialist}</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Fees</h6>
                                    <h6 className='text-capitalize'>: {userinfo?.Doctor?.Fees}</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Phone</h6>
                                    <h6>: {userinfo?.Doctor?.hospitalContact}</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Hospital</h6>
                                    <h6 className='text-capitalize'>: {userinfo?.Doctor?.hospital}</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>hospitalAddress</h6>
                                    <h6 className='text-capitalize'>: {userinfo?.Doctor?.Fees}</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Day</h6>
                                    <h6 className='text-capitalize'>: {userinfo?.Doctor?.weekAvailability}</h6>
                                </div>
                            </div> 
                        </div>
                    </section>}

                    {userinfo?.user?.role === "patient"  &&  <section className='col-md-8 my-3' > 
                        <div className='bg-white rounded-3 shadow' >
                            <div className='p-4 text-muted'>
                                <div className='d-flex'>
                                    <h6 className='w-25'>Full Name</h6>
                                    <h6 className='text-capitalize'>: {userinfo?.user?.name}</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Email</h6>
                                    <h6>: {userinfo?.user?.email}</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>role</h6>
                                    <h6 className='text-capitalize'>: {userinfo?.user?.role}</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Phone</h6>
                                    <h6>: {userinfo?.Patient?.contact}</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Mobile</h6>
                                    <h6>: {userinfo?.Patient?.contact}</h6>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <h6 className='w-25'>Blood Group</h6>
                                    <h6 className='text-capitalize'>: {userinfo?.Patient?.bloodgroup}</h6>
                                </div>
                            </div> 
                        </div>
                    </section>}

                </div>
            </div>
        </div>  
    </> 
  );
};

export default UserProfile;

