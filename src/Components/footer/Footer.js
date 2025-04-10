import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-section">
          <h3 className="footer-title">Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Condition</a></li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <p>📍 123 Street, New York, USA</p>
          <p>📞 +012 345 67890</p>
          <p>📧 info@example.com</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        
        <div className="footer-section">
          <h3 className="footer-title">Opening</h3>
          <p>Monday - Saturday</p>
          <p>09AM - 09PM</p>
          <p>Sunday</p>
          <p>10AM - 08PM</p>
        </div>

       
        <div className="footer-section">
          <h3 className="footer-title">Newsletter</h3>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button className="signup-btn">SIGNUP</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© NutriTrack, All Rights Reserved. Designed By Student</p>
      </div>
    </footer>
  );
};

export default Footer;
