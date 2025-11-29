import './Projects.css';

export const Projects = () => {
  const projects = [
    {
      title: "JWT Authenticator",
      description: "JWT Authenticator is a full-stack web application template that provides secure user registration and authentication features using JSON Web Tokens (JWT).",
      tech: ["React", "Spring Boot", "Java 17", "PostgreSQL", "JWT"],
      github: "https://github.com/mortytheplatypus/jwt-authenticator",
      type: "Full Stack"
    },
    {
      title: "Pasteruf",
      description: "Pasteruf is a pastebin-like web application that allows users to share text snippets. It also features auto redirect for shortened URLs.",
      tech: ["React", "Flask", "Python", "PostgreSQL"],
      github: "https://github.com/mortytheplatypus/pasteruf",
      type: "Full Stack"
    },
      title: "Find My Apartment",
      description: "An apartment finding platform built as a university software development project. This full-stack application helps users find apartments based on various criteria including type (Bachelor, Family, Sublet), location, budget, facilities, and more.",
      tech: ["ExpressJS", "NextJS", "PostgreSQL", "Supabase", "TailwindCSS", "MUI"],
      github: "https://github.com/mortytheplatypus/find-my-apartment",
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
