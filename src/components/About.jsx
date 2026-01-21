import React from 'react';
import '../styles/About.css';

function About() {
  const features = [
    {
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices and design patterns."
    },
    {
      title: "Problem Solving",
      description: "Tackling complex challenges with creative and efficient solutions."
    },
    {
      title: "Continuous Learning",
      description: "Always exploring new technologies and staying updated with industry trends."
    },
    {
      title: "Collaboration",
      description: "Working effectively in teams and communicating technical concepts clearly."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>About Me</h2>
        <p>
          I'm a passionate software engineer with expertise in React, JavaScript, HTML, CSS, and Python. 
          I specialize in building modern, responsive web applications that deliver exceptional user experiences.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <hr className="section-divider" />
    </section>
  );
}

export default About;