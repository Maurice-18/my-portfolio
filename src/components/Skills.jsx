import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "Backend",
      skills: ["Python", "Node.js", "Django", "Rust", "REST APIs", "Express"]
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "MongoDB", "SQLite", "MySQL", "Firebase", "Supabase"]
    },
    {
      category: "Tools & Others",
      skills: ["Git / GitHub", "VS Code", "npm / pip", "Docker", "Webpack", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2>Skills & Technologies</h2>
        <p>
          A comprehensive toolkit for building robust and scalable applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, i) => (
                <li key={i} className="skill-item">
                  <span className="skill-bullet">•</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;