import React from 'react';
import './Projects.css';

export const Projects = () => {
  const projects = [
    {
      title: "Auth Me In",
      description: "A web application providing user registration and authentication features. Built with React frontend and Spring Boot backend, featuring secure user management and session handling.",
      tech: ["React", "Spring Boot", "Java 17", "MySQL", "JWT"],
      github: "https://github.com/mortytheplatypus/Auth-Me-In",
      type: "Full Stack"
    },
    {
      title: "Fantasy Premier League",
      description: "A comprehensive fantasy football platform built as a CSE216 project. Features user management, team creation, and real-time score tracking using Oracle database.",
      tech: ["JavaScript", "Node.js", "Oracle 19c", "PLSQL", "React"],
      github: "https://github.com/mortytheplatypus/FantasyPremierLeagueCSE216",
      type: "Database Application"
    },
    {
      title: "Computer Graphics Projects",
      description: "A collection of computer graphics implementations including OpenGL basics, Rasterization techniques, and Ray Tracing algorithms.",
      tech: ["C++", "OpenGL", "Ray Tracing", "Rasterization"],
      github: "https://github.com/mortytheplatypus/Computer-Graphics-OpenGL",
      type: "Graphics"
    },
    {
      title: "Birthday Predictomatic C-137",
      description: "A fun React application that predicts a date through interactive yes/no questions, demonstrating frontend logic and user interaction.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/mortytheplatypus/birthday-predictomatic-c-137",
      type: "Frontend"
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project) => (
          <a 
            key={project.title} 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-header">
              <h2>{project.title}</h2>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((techTag) => (
                <span key={techTag} className="tech-tag">
                  {techTag}
                </span>
              ))}
            </div>
            <div className="card-footer">
              <span className="project-type">{project.type}</span>
              <img src="/icons/github.png" alt="GitHub" className="github-icon" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
