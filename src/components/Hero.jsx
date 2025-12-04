import React from 'react';
import './../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content animate-fade">
          <h2 className="hero-subtitle">Welcome to my portfolio</h2>
          <h1 className="hero-title">Maurice</h1>
          <h1 className="hero-title">Software Engineer</h1>
          <p className="hero-description">
            Full-stack developer specializing in React, JavaScript, HTML, CSS, and Python. 
            Building elegant, scalable web applications with modern technologies.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;