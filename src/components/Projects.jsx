import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics built with React and Python.",
      technologies: ["React", "JavaScript", "Python", "CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management Dashboard",
      description: "Interactive task management application with drag-and-drop functionality, built with React and styled with modern CSS.",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#"
    },
    {
      title: "Data Analytics Tool",
      description: "Python-powered analytics platform with React frontend for real-time data visualization and reporting.",
      technologies: ["Python", "React", "JavaScript", "HTML"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p>
          A selection of projects that showcase my skills and experience in building modern applications.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="tech-tags">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} className="project-link">
                <span>Code</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href={project.demo} className="project-link">
                <span>Demo</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;