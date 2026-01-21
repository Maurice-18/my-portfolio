import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Maurice Muita</h1>
        <h2 className="hero-subtitle">Software Engineer</h2>
        <p className="hero-description">
          Full-stack developer specializing in React, JavaScript, HTML, CSS, and Python. 
          Building elegant, scalable web applications with modern technologies.
        </p>
        <div className="btn-group">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;