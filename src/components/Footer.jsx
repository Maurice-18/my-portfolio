import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        <div className="footer-social">
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">Twitter</a>
        </div>

        <div className="footer-copyright">
          <p>&copy; {currentYear} Software Engineer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;