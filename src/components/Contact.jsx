import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    
    alert(`Thank you for your message, ${formData.name}! I'll get back to you soon.`);
    
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h1 className="section-title">Get In Touch</h1>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card animate-slide-right">
              <h3><FaEnvelope /> Email</h3>
              <p>hello@example.com</p>
            </div>
            
            <div className="contact-card animate-slide-right" style={{ animationDelay: '0.1s' }}>
              <h3><FaMapMarkerAlt /> Location</h3>
              <p>San Francisco, CA</p>
            </div>
            
            <div className="contact-note animate-slide-right" style={{ animationDelay: '0.2s' }}>
              <p>
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
          </div>
          
          <div className="contact-form animate-fade" style={{ animationDelay: '0.3s' }}>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your.email@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  placeholder="Your message..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-block">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;