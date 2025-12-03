import React from 'react';
import { FaCode, FaPuzzlePiece, FaGraduationCap, FaUsers } from 'react-icons/fa';
import './../styles/About.css';

const About = () => {
  const features = [
    {
      id: 1,
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that follows best practices and design patterns.'
    },
    {
      id: 2,
      icon: <FaPuzzlePiece />,
      title: 'Problem Solving',
      description: 'Tackling complex challenges with creative and efficient solutions.'
    },
    {
      id: 3,
      icon: <FaGraduationCap />,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and staying updated with industry trends.'
    },
    {
      id: 4,
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating technical concepts clearly.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h1 className="section-title">About Me</h1>
        <div className="about-content">
          <p className="about-text">
            I'm a passionate software engineer with expertise in React, JavaScript, HTML, CSS, and Python. 
            I specialize in building modern, responsive web applications that deliver exceptional user experiences.
          </p>
          
          <div className="about-features">
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                className="feature-card animate-fade"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;