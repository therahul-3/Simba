import React from "react";
import centerLogo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <section id="contact">
      <footer className="bg-orange text-white py-4">
        <div className="container">
          <div className="row text-center text-md-start align-items-start">

            {/* Left Links */}
            <div className="col-12 col-md-6 d-flex flex-wrap">
              <div className="me-4 mb-3">
                <h6 className="fw-bold text-uppercase mb-2">Projects Undertaken</h6>
                <ul className="list-unstyled mb-0 small fw-light">
                  <li className="text-uppercase">- Residential Projects</li>
                  <li className="text-uppercase">- Commercial Projects</li>
                  <li className="text-uppercase">- Industrial Projects</li>
                  <li className="text-uppercase">- Civil Projects</li>
                </ul>
              </div>

              <div className="me-4 mb-3">
                <h6 className="fw-bold text-uppercase mb-2">About Us</h6>
                <ul className="list-unstyled mb-0 small fw-light">
                  <li className="text-uppercase">- Services Offered</li>
                  <li className="text-uppercase">- Who We Are</li>
                  <li className="text-uppercase">- New & Media</li>
                  <li className="text-uppercase">- Contact Us</li>
                </ul>
              </div>

              <div className="mb-3">
                <h6 className="fw-bold text-uppercase mb-2">Terms and Usage</h6>
                <ul className="list-unstyled mb-0 small fw-light">
                  <li className="text-uppercase">- Terms of Use</li>
                  <li className="text-uppercase">- Privacy Policy</li>
                  <li className="text-uppercase">- Disclaimer</li>
                </ul>
              </div>
            </div>

            {/* Center Logo */}
            <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-start mb-3">
              <img src={centerLogo} alt="Simba Logo" style={{ maxWidth: "80px" }} />
            </div>

            {/* Right: Social Icons and Copyright */}
            <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-end">
              <div className="mb-2">
                <i className="bi bi-facebook me-3"></i>
                <i className="bi bi-twitter me-3"></i>
                <i className="bi bi-youtube me-3"></i>
                <i className="bi bi-instagram"></i>
              </div>
              <p className="small m-0 text-center text-md-end">
                &copy; 2024. Simba Developers.<br />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
