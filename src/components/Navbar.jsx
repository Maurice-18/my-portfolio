import React, { useState, useEffect } from 'react';
import './../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 1, name: 'Home', href: '#home' },
    { id: 2, name: 'About', href: '#about' },
    { id: 3, name: 'Projects', href: '#projects' },
    { id: 4, name: 'Skills', href: '#skills' },
    { id: 5, name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container container">
        <div className="logo">DevPortfolio</div>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={link.href} 
                className="nav-link"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        
        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;