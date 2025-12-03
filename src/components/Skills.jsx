import React from 'react';
import { 
  FaDesktop, FaServer, FaDatabase, FaTools,
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython, FaNodeJs, FaGitAlt, FaDocker, FaNpm
} from 'react-icons/fa';
import { 
  SiDjango, SiFlask, SiPostgresql, SiMongodb, SiMysql, 
  SiFirebase, SiSupabase, SiVscode, SiWebpack, SiTailwindcss
} from 'react-icons/si';
import './../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Frontend',
      icon: <FaDesktop />,
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript (ES6+)', icon: <FaJs /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Responsive Design', icon: <FaDesktop /> }
      ]
    },
    {
      id: 2,
      title: 'Backend',
      icon: <FaServer />,
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Django', icon: <SiDjango /> },
        { name: 'Flask', icon: <SiFlask /> },
        { name: 'REST APIs', icon: <FaServer /> },
        { name: 'Express', icon: <FaNodeJs /> }
      ]
    },
    {
      id: 3,
      title: 'Database',
      icon: <FaDatabase />,
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'SQLite', icon: <FaDatabase /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Supabase', icon: <SiSupabase /> }
      ]
    },
    {
      id: 4,
      title: 'Tools & Others',
      icon: <FaTools />,
      skills: [
        { name: 'Git / GitHub', icon: <FaGitAlt /> },
        { name: 'VS Code', icon: <SiVscode /> },
        { name: 'npm / pip', icon: <FaNpm /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Webpack', icon: <SiWebpack /> },
        { name: 'CI/CD', icon: <FaTools /> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h1 className="section-title">Skills & Technologies</h1>
        <p className="section-subtitle">
          A comprehensive toolkit for building robust and scalable applications.
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={category.id} 
              className="skill-category animate-slide-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3>{category.icon} {category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    {skill.icon} {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;