import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

const UserProfile = () => {


    const Context = useContext(AuthContext);
    const { UserDetails } = Context;
    const [userinfo, setUserInfo] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getUser();
        // eslint-disable-next-line
    }, []);

    const getUser = async () => {
        let res = await UserDetails();
        setUserInfo(res);
    };

    const Logout = () => {
        localStorage.removeItem("AuthToken");
        localStorage.removeItem("UserRole");
        alert("You are logout");
        navigate("/");
    };

    return (
        <>
            <div className='py-md-4' style={{ background: '#f8f9fa', minHeight: '100vh' }}>
                <div className='container-md py-2 py-md-4'>
                    <div className='row'>
                        <section className='col-md-4 my-3'>
                            <div className='premium-card glass-effect border-0 rounded-4 shadow-sm overflow-hidden h-100' >

                                {userinfo?.user?.role === "doctor" && <div className='p-5'>
                                    <div className='d-flex justify-content-center'>
                                        <div className='rounded-circle p-1 shadow-sm' style={{ background: 'var(--secondary-gradient)', width: '158px', height: '158px' }}>
                                            <OptimizedImage className='bg-light' src="/assets/img/Doctor_6.png" alt="User-img" style={{ width: "150px", height: '150px', borderRadius: "50%" }} imageStyle={{ borderRadius: '50%' }} objectFit="contain" />
                                        </div>
                                    </div>
                                    <div className='text-center mt-4'>
                                        <h3 className="fw-bold text-capitalize m-0" style={{ color: '#2d3436' }}>{userinfo?.user?.name}</h3>
                                        <p className="text-primary fw-bold text-uppercase mt-2 small opacity-75" style={{ letterSpacing: '1px' }}>{userinfo?.Doctor?.specialist}</p>
                                        <p className="text-secondary small">{userinfo?.Doctor?.hospital}</p>
                                        <button className='btn btn-outline-danger rounded-pill px-4 py-2 fw-bold shadow-sm transition-smooth border-2 mt-3' onClick={Logout} >Sign Out</button>
                                    </div>
                                </div>}

                                {userinfo?.user?.role === "patient" && <div className='p-5'>
                                    <div className='d-flex justify-content-center'>
                                        <div className='rounded-circle p-1 shadow-sm' style={{ background: 'var(--secondary-gradient)', width: '158px', height: '158px' }}>
                                            <OptimizedImage className='bg-light' src="/assets/img/Patient.png" alt="User-img" style={{ width: "150px", height: '150px', borderRadius: "50%" }} imageStyle={{ borderRadius: '50%' }} objectFit="contain" />
                                        </div>
                                    </div>
                                    <div className='text-center mt-4'>
                                        <h3 className="fw-bold text-capitalize m-0" style={{ color: '#2d3436' }}>{userinfo?.user?.name}</h3>
                                        <p className="text-secondary mt-1 small">{userinfo?.user?.email}</p>
                                        <p className="badge bg-primary-gradient px-3 py-2 rounded-pill shadow-sm text-uppercase small" style={{ background: 'var(--primary-gradient)', fontSize: '0.65rem' }}>{userinfo?.user?.role}</p>
                                        <div className='mt-4'>
                                            <button className='btn btn-outline-danger rounded-pill px-4 py-2 fw-bold shadow-sm transition-smooth border-2' onClick={Logout} >Sign Out</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </section>

                        {userinfo?.user?.role === "doctor" && <section className='col-md-8 my-3' >
                            <div className='premium-card glass-effect border-0 rounded-4 shadow-sm h-100 p-4' >
                                <div className='text-muted'>
                                    <h5 className='fw-bold mb-4' style={{ color: '#2d3436' }}><i className="fa-solid fa-user-doctor me-2 text-primary"></i>Doctor Credentials</h5>
                                    <div className='row g-4'>
                                        {[
                                            { label: 'Full Name', value: userinfo?.user?.name, icon: 'fa-user' },
                                            { label: 'Email', value: userinfo?.user?.email, icon: 'fa-envelope' },
                                            { label: 'Role', value: userinfo?.user?.role, icon: 'fa-shield-halved' },
                                            { label: 'Specialty', value: userinfo?.Doctor?.specialist, icon: 'fa-certificate' },
                                            { label: 'Fees', value: `$${userinfo?.Doctor?.Fees}`, icon: 'fa-hand-holding-dollar' },
                                            { label: 'Phone', value: userinfo?.Doctor?.hospitalContact, icon: 'fa-phone' },
                                            { label: 'Hospital', value: userinfo?.Doctor?.hospital, icon: 'fa-hospital' },
                                            { label: 'Availability', value: userinfo?.Doctor?.weekAvailability, icon: 'fa-calendar-days' },
                                        ].map((item, idx) => (
                                            <div className='col-md-6' key={idx}>
                                                <div className='p-3 rounded-3 transition-smooth border-bottom' style={{ background: 'rgba(255,255,255,0.4)', borderColor: 'rgba(0,0,0,0.05) !important' }}>
                                                    <small className='text-primary fw-bold text-uppercase d-block mb-1' style={{ fontSize: '0.65rem', opacity: 0.8 }}>{item.label}</small>
                                                    <div className='d-flex align-items-center gap-2'>
                                                        <i className={`fa-solid ${item.icon} text-secondary small opacity-50`}></i>
                                                        <h6 className='m-0 text-capitalize fw-bold' style={{ color: '#2d3436' }}>{item.value}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>}

                        {userinfo?.user?.role === "patient" && <section className='col-md-8 my-3' >
                            <div className='premium-card glass-effect border-0 rounded-4 shadow-sm h-100 p-4' >
                                <div className='text-muted'>
                                    <h5 className='fw-bold mb-4' style={{ color: '#2d3436' }}><i className="fa-solid fa-id-card me-2 text-primary"></i>Patient Profile</h5>
                                    <div className='row g-4'>
                                        {[
                                            { label: 'Full Name', value: userinfo?.user?.name, icon: 'fa-user' },
                                            { label: 'Email Address', value: userinfo?.user?.email, icon: 'fa-envelope' },
                                            { label: 'Account Role', value: userinfo?.user?.role, icon: 'fa-shield-halved' },
                                            { label: 'Primary Mobile', value: userinfo?.Patient?.contact, icon: 'fa-phone' },
                                            { label: 'Backup Mobile', value: userinfo?.Patient?.contact, icon: 'fa-mobile-screen-button' },
                                            { label: 'Blood Group', value: userinfo?.Patient?.bloodgroup, icon: 'fa-droplet' },
                                        ].map((item, idx) => (
                                            <div className='col-md-6' key={idx}>
                                                <div className='p-3 rounded-3 transition-smooth border-bottom' style={{ background: 'rgba(255,255,255,0.4)', borderColor: 'rgba(0,0,0,0.05) !important' }}>
                                                    <small className='text-primary fw-bold text-uppercase d-block mb-1' style={{ fontSize: '0.65rem', opacity: 0.8 }}>{item.label}</small>
                                                    <div className='d-flex align-items-center gap-2'>
                                                        <i className={`fa-solid ${item.icon} text-secondary small opacity-50`}></i>
                                                        <h6 className='m-0 text-capitalize fw-bold' style={{ color: '#2d3436' }}>{item.value}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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

