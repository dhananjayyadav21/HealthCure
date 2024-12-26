import React from 'react';

const Footer = () => {
  return (
    <footer className="Footer-container text-light py-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              HealthCure Care Clinics provide comprehensive and reliable medical care with top surgeons and advanced facilities.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light nav-link">Our Services</a></li>
              <li><a href="/" className="text-light nav-link">Meet the Doctors</a></li>
              <li><a href="/" className="text-light nav-link">Contact Us</a></li>
              <li><a href="/" className="text-light nav-link">Book Appointment</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>
              <a href="/" className='nav-link'><i className="fa-solid fa-phone mx-2"></i> +1-234-567-8901</a>
              <a href="/" className='nav-link'><i className="fa-regular fa-envelope mx-2"></i> support@healthcure.com</a>
              <a href="/" className='nav-link'><i className="fa-solid fa-location-crosshairs mx-2"></i> 123 HealthCure Street, City, Country</a>
            </p>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="mb-0">&copy; {new Date().getFullYear()} HealthCure Care Clinics. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
