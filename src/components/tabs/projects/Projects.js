import './Projects.css';

export const Projects = () => {
  const projects = [
    {
      title: "JWT Authenticator",
      description: "A full-stack web application template implementing secure user registration, login, and robust authentication flows utilizing JSON Web Tokens (JWT).",
      tech: ["React", "Spring Boot", "Java 17", "PostgreSQL", "JWT"],
      github: "https://github.com/mortytheplatypus/jwt-authenticator",
      type: "Full Stack"
    },
    {
      title: "Pasteruf",
      description: "A Pastebin-style web application enabling users to seamlessly share code and text snippets, featuring automatic redirection for customized, shortened URLs.",
      tech: ["React", "Flask", "Python", "PostgreSQL"],
      github: "https://github.com/mortytheplatypus/pasteruf",
      type: "Full Stack"
    },
    {
      title: "Find My Apartment",
      description: "A comprehensive full-stack platform designed to streamline apartment hunting, allowing users to filter listings by type, location, budget, and facilities.",
      tech: ["ExpressJS", "NextJS", "PostgreSQL", "Supabase", "TailwindCSS", "MUI"],
      github: "https://github.com/mortytheplatypus/find-my-apartment",
      type: "Full Stack"
    },
    {
      title: "Fantasy Premier League",
      description: "A feature-rich fantasy football platform supporting user management, custom team creation, and real-time match score tracking powered by an Oracle database.",
      tech: ["JavaScript", "Node.js", "Oracle 19c", "PLSQL", "React"],
      github: "https://github.com/mortytheplatypus/FantasyPremierLeagueCSE216",
      type: "Database Application"
    },
    {
      title: "Computer Graphics Projects",
      description: "A curated collection of core computer graphics implementations, showcasing practical applications of OpenGL basics, custom rasterization techniques, and ray tracing algorithms.",
      tech: ["C++", "OpenGL", "Ray Tracing", "Rasterization"],
      github: "https://github.com/mortytheplatypus/Computer-Graphics-OpenGL",
      type: "Graphics"
    }
  ];

  return (
    <div className="projects-container">
      <h1>Things I&apos;ve been building</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
              title={project.github}
            >
              <div className="project-header">
                <h2>{project.title}</h2>
                <svg
                  className="external-link-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>

              <p className="project-description">{project.description}</p>
              
              <div className="card-footer">
                <div className="tech-stack">
                  {project.tech.map((techTag) => (
                    <span key={techTag} className="tech-tag">
                      {techTag}
                    </span>
                  ))}
                </div>
              </div>
            </a>

          </div>
        ))}
      </div>
    </div>
  );
};
