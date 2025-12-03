import React from 'react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import './../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics built with React and Python.',
      tags: ['React', 'JavaScript', 'Python', 'CSS'],
      codeLink: '#',
      demoLink: '#'
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description: 'Interactive task management application with drag-and-drop functionality, built with React and styled with modern CSS.',
      tags: ['React', 'HTML', 'CSS', 'JavaScript'],
      codeLink: '#',
      demoLink: '#'
    },
    {
      id: 3,
      title: 'Data Analytics Tool',
      description: 'Python-powered analytics platform with React frontend for real-time data visualization and reporting.',
      tags: ['Python', 'React', 'JavaScript', 'HTML'],
      codeLink: '#',
      demoLink: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h1 className="section-title">Featured Projects</h1>
        <p className="section-subtitle">
          A selection of projects that showcase my skills and experience in building modern applications.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card animate-zoom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <div className="project-body">
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <a 
                  href={project.codeLink} 
                  className="project-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaCode /> Code
                </a>
                <a 
                  href={project.demoLink} 
                  className="project-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;