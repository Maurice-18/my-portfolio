import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Portfolio</span>
        </div>

        <div className="nav-links">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`} />
        </button>

        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;