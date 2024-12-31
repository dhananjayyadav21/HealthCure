import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
   
    const userRole = localStorage.getItem('UserRole');

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
      localStorage.removeItem("AuthToken");
      localStorage.removeItem("UserRole");
      alert("You are logout");
      navigate('/');
    };

  return (
    <>
    
        <nav id='nav' className="navbar sticky-top navbar-expand-lg shadow-sm px-1 px-md-4 nav-color">
            <div className="container-fluid fs-6">
                    
                {/* Brand-Logo For App */}
                <h4 className='m-0'><Link className="nav-text nav-link navbar-brand mt-0" to="/">HealthCure</Link></h4>
        
                <span className='d-flex align-items-center gap-2'>
                    {/* profile icon for MobileBar */}
                    <div className="nav-item dropdown">  
                        <a className="nav-text nav-link" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        { userRole === "patient" ? 
                             <div className='round-icon shadow-sm d-flex justify-content-center align-items-center'><img  className='profile-img rounded-circle' src="assets/img/Patient.png" alt="profile" /></div> :
                             <div className='round-icon shadow-sm d-flex justify-content-center align-items-center'><img  className='profile-img rounded-circle' src="assets/img/Doctorr.png" alt="profile" /></div>
                        }
                        </a>
                        <ul className="dropdown-menu mt-3" aria-labelledby="navbarDropdown">
                            <li><h6 className="dropdown-item text-capitalize">{userRole}</h6></li>
                            <li><h6 className="dropdown-item text-danger" onClick={Logout}>Logout <i className="fa-solid fa-arrow-right-from-bracket"></i></h6></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="/userProfile"><button className='btn btn-dark w-100'>My Profile</button></a></li>
                        </ul>
                    </div>
                    <div className="nav-item d-lg-none">
                         <Link className="nav-text nav-link round-icon shadow-sm d-flex justify-content-center align-items-center" to="/notification"><i className="fa-solid fa-bell"></i></Link>
                    </div>
                    {/* Hamburger icon for MobileBar */}
                    <i className={`fa-solid fa-bars mx-1 align-self-center round-icon shadow-sm d-flex justify-content-center align-items-center d-lg-none d-${openMBDisply}`} onClick={openMobileBar}  ></i>
                    <i className={`fa-solid fa-xmark align-self-center round-icon shadow-sm d-flex justify-content-center align-items-center d-lg-none d-${display}`} onClick={closeMobileBar}></i>
                </span>
                
                {/* Colaps item Below Lg Screen */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    {/* Shedule, Available Slots, Reschedule, notification */}
                    <div className='d-flex justify-content-between align-items-center'>

                    { ["/signin","/signup","/getStart","/welcomePage"].includes(location.pathname) ? "" : 

                       <> <ul className="navbar-nav me-auto d-flex align-items-center">

                        { !localStorage.getItem('AuthToken') ? <> <li className="nav-item">
                            <Link className="nav-text nav-link bg-info px-2 py-1 rounded-4 text-white fw-bold" to="/getStart">Getstart</Link></li> </> : "" 
                        }
                            <li className="nav-item">
                            <Link className="nav-text nav-link " to="/appointment">Appointment </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-text nav-link " to="/reschedule">Reschedule</Link>
                            </li>
                        </ul> </> 
                    }
                    </div>
                </div>
            </div>
        </nav>    

        <div className='MobileBar-container sticky-top'> 
        {/*====================================================== mobilebar =======================================================*/}
            <div className={`MobileBar p-2 d-flex d-${display}`}>
                <div className="navbar-nav me-auto mb-2 mb-lg-0 ">
                
                    {/* Shedule, Available Slots, Reschedule, notification */}
                    <div onClick={closeMobileBar}>

                    { !localStorage.getItem('AuthToken') ? <> <li className="nav-item">
                        <Link className="nav-text nav-link bg-info px-2 py-1 rounded-4 text-white fw-bold" to="/getStart">Getstart</Link></li> </> : "" 
                    }
                        <li className="nav-item">
                        <Link className="nav-text nav-link " to="/appointment">Appointment </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-text nav-link " to="/reschedule">Reschedule</Link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar

