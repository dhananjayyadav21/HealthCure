import React, { useState } from 'react'
import { Link, useLocation, useNavigate, NavLink } from 'react-router-dom'
import OptimizedImage from './OptimizedImage';

const Navbar = () => {
    const userRole = localStorage.getItem('UserRole');
    const authToken = localStorage.getItem('AuthToken');
    const location = useLocation();
    const navigate = useNavigate();

    const [display, setDisplay] = useState("none");
    const [openMBDisply, setopenMBDisply] = useState("");

    const openMobileBar = () => {
        setDisplay("");
        setopenMBDisply("none");
    };

    const closeMobileBar = () => {
        setDisplay("none");
        setopenMBDisply("");
    };

    const Logout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            localStorage.removeItem("AuthToken");
            localStorage.removeItem("UserRole");
            navigate('/');
        }
    };

    const navLinkClass = ({ isActive }) =>
        `nav-link px-3 py-2 rounded-pill fw-medium transition-smooth ${isActive ? 'text-primary' : 'text-secondary'}`;

    return (
        <>
            <nav id='nav' className="navbar sticky-top navbar-expand-lg glass-effect px-1 px-md-4 py-3" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center gap-2" to="/" style={{ letterSpacing: '-1px' }}>
                        <div className="bg-primary-gradient rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '35px', height: '35px', background: 'var(--primary-gradient)' }}>
                            <i className="fa-solid fa-heart-pulse text-white fs-5"></i>
                        </div>
                        <h4 className='m-0 fw-bold text-primary mb-0'>HealthCure</h4>
                    </Link>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        {!["/signin", "/signup", "/getStart", "/welcomePage"].includes(location.pathname) && (
                            <ul className="navbar-nav gap-2">
                                <li className="nav-item">
                                    <NavLink className={navLinkClass} to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={navLinkClass} to="/appointment">Appointments</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={navLinkClass} to="/reschedule">Reschedule</NavLink>
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className='d-flex align-items-center gap-2 gap-md-3'>
                        <Link className="round-icon shadow-sm d-flex justify-content-center align-items-center bg-white position-relative" style={{ width: '40px', height: '40px', borderRadius: '12px' }} to="/notification">
                            <i className="fa-solid fa-bell text-secondary"></i>
                            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle" style={{ width: '8px', height: '8px' }}></span>
                        </Link>

                        <div className="dropdown">
                            <div className="cursor-pointer d-flex align-items-center gap-2 bg-light p-1 pe-2 rounded-pill shadow-sm transition-smooth border" style={{ height: '40px' }} data-bs-toggle="dropdown">
                                <div className='d-flex justify-content-center align-items-center overflow-hidden rounded-circle bg-white shadow-sm' style={{ width: '32px', height: '32px' }}>
                                    <OptimizedImage
                                        src={userRole === "doctor" ? "/assets/img/Doctorr.png" : "/assets/img/Patient.png"}
                                        alt="profile"
                                        style={{ width: '32px', height: '32px' }}
                                    />
                                </div>
                                <i className="fa-solid fa-chevron-down text-secondary small"></i>
                            </div>
                            <ul className="dropdown-menu dropdown-menu-end p-2 mt-3 shadow-lg border-0 rounded-4 animated-card">
                                <li>
                                    <div className="px-3 py-2 border-bottom mb-2">
                                        <p className="m-0 small text-secondary">Signed in as</p>
                                        <p className="m-0 fw-bold text-dark text-capitalize">{userRole || 'Guest'}</p>
                                    </div>
                                </li>
                                <li><Link className="dropdown-item rounded-3 py-2" to="/userProfile"><i className="fa-solid fa-user-circle me-2 opacity-50"></i> My Profile</Link></li>
                                {authToken && (
                                    <>
                                        <li><hr className="dropdown-divider opacity-50" /></li>
                                        <li><div className="dropdown-item dropdown-item-danger rounded-3 py-2 cursor-pointer text-danger" onClick={Logout}><i className="fa-solid fa-power-off me-2"></i> Logout</div></li>
                                    </>
                                )}
                            </ul>
                        </div>

                        <i className={`fa-solid fa-bars round-icon d-lg-none cursor-pointer d-${openMBDisply}`} onClick={openMobileBar} style={{ width: '40px', height: '40px' }}></i>
                        <i className={`fa-solid fa-xmark round-icon d-lg-none cursor-pointer d-${display}`} onClick={closeMobileBar} style={{ width: '40px', height: '40px' }}></i>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`MobileBar-container py-3 d-${display} glass-effect position-fixed w-100 start-0 z-3 transition-smooth`} style={{ top: '75px', height: 'calc(100vh - 75px)', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)' }}>
                <div className="container">
                    <div className="navbar-nav gap-3">
                        <NavLink className={({ isActive }) => `nav-link p-3 rounded-4 h5 m-0 fw-bold ${isActive ? 'bg-primary text-white' : 'bg-light'}`} to="/" onClick={closeMobileBar}>Home</NavLink>
                        <NavLink className={({ isActive }) => `nav-link p-3 rounded-4 h5 m-0 fw-bold ${isActive ? 'bg-primary text-white' : 'bg-light'}`} to="/appointment" onClick={closeMobileBar}>Appointments</NavLink>
                        <NavLink className={({ isActive }) => `nav-link p-3 rounded-4 h5 m-0 fw-bold ${isActive ? 'bg-primary text-white' : 'bg-light'}`} to="/reschedule" onClick={closeMobileBar}>Reschedule</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
