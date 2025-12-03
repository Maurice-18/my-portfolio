import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaCodepen, FaHeart } from 'react-icons/fa';
import './../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">DevPortfolio</div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">
              <FaCodepen />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Software Engineer Portfolio. All rights reserved.</p>
          <p>Built with <FaHeart className="heart-icon" /> using React, HTML, CSS, and JavaScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;