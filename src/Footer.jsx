import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">© 2025 EduConnect. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
          <a href="/contact" className="footer-link">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
