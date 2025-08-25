import React from 'react';
import PropTypes from 'prop-types';
import './Academics.css';

const experienceData = [
  {
    period: "May 2024 - Present",
    isCurrent: true,
    position: "Software Engineer",
    company: "Synesis IT PLC",
    description: "Contributing to the full-stack development of Convay, a cutting-edge video conferencing platform. Leading feature development initiatives, implementing critical bug fixes, and driving code refactoring efforts while maintaining industry best practices to deliver exceptional user experiences.",
    techStack: ["Spring Boot", "React", "Docker", "WebSocket", "Liquibase", "MySQL", "Cassandra", "Redis", "Kafka", "Nginx"]
  },
  {
    period: "May 2023 - June 2023",
    isCurrent: false,
    duration: "2 months",
    position: "Software Developer Intern",
    company: "MYSOFT LIMITED",
    description: "Specialized in healthcare big data management and analytics during undergraduate studies. Developed data-driven solutions to identify trends and patterns, optimizing operational efficiency and enhancing service delivery for hospitals and patients.",
    techStack: ["Flask", "Angular", "PostgreSQL"]
  }
];

const educationData = [
  {
    period: "2019 - 2023",
    badgeType: "achievement",
    badgeText: "Bachelor's",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    degree: "Bachelor of Science in Computer Science and Engineering",
    description: "Completed my undergraduate degree at Bangladesh's premier engineering institution. This transformative period laid the foundation for my technical expertise and professional development, marking the most impactful phase of my academic journey.",
    highlights: [
      {
        label: "Focus",
        value: "Software Engineering & Data Structures"
      }
    ]
  },
  {
    period: "2016 - 2018",
    badgeType: "level",
    badgeText: "HSC",
    institution: "Dinajpur Government College",
    degree: "Higher Secondary Certificate (HSC)",
    description: "Completed higher secondary education with specialization in Science stream, building strong fundamentals in mathematics, physics, and chemistry that prepared me for engineering studies."
  },
  {
    period: "2008 - 2016",
    badgeType: "level",
    badgeText: "SSC",
    institution: "Dinajpur Zilla School",
    degree: "Secondary School Certificate (SSC)",
    description: "Spent my formative academic years from Class 3 to 10, developing strong analytical thinking and problem-solving skills that became the cornerstone of my educational foundation."
  },
  {
    period: "2005 - 2007",
    badgeType: "level",
    badgeText: "Primary",
    institution: "St. Joseph's School, Dinajpur",
    degree: "Primary Education",
    description: "Began my educational journey at this esteemed institution, completing up to Class 2 and establishing the fundamental learning habits that would guide my academic career."
  }
];

const ExperienceCard = ({ experience, isFeatured = false }) => {
  return (
    <div className={`experience-card ${isFeatured ? 'featured' : ''}`}>
      <div className="card-header">
        <div className="period">{experience.period}</div>
        {experience.isCurrent ? (
          <div className="status-badge">Current</div>
        ) : (
          <div className="duration-badge">{experience.duration}</div>
        )}
      </div>
      <div className="card-content">
        <h3>{experience.position}</h3>
        <p className="company">{experience.company}</p>
        <p className="description">{experience.description}</p>
        <div className="tech-stack">
          {experience.techStack.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.object.isRequired,
  isFeatured: PropTypes.bool
};

const EducationCard = ({ education, isFeatured = false }) => {
  return (
    <div className={`education-card ${isFeatured ? 'featured' : ''}`}>
      <div className="card-header">
        <div className="period">{education.period}</div>
        <div className={`${education.badgeType}-badge`}>{education.badgeText}</div>
      </div>
      <div className="card-content">
        <h3>{education.institution}</h3>
        <p className="degree">{education.degree}</p>
        <p className="description">{education.description}</p>
        {education.highlights && (
          <div className="highlights">
            {education.highlights.map((highlight) => (
              <div key={highlight.label} className="highlight-item">
                <span className="highlight-label">{highlight.label}:</span>
                <span>{highlight.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

EducationCard.propTypes = {
  education: PropTypes.object.isRequired,
  isFeatured: PropTypes.bool
};

export const Academics = () => {
  return (
    <div className="academics-container">
      <div className="journey-content">
        {/* Work Experience Section */}
        <section className="section-block">
          <div className="section-header">
            <div className="section-icon work-icon">💼</div>
            <h2>Work Experience</h2>
          </div>
          
          <div className="timeline">
            {experienceData.map((experience, index) => (
              <ExperienceCard 
                key={index}
                experience={experience}
                isFeatured={index === 0}
              />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="section-block">
          <div className="section-header">
            <div className="section-icon education-icon">🎓</div>
            <h2>Education</h2>
          </div>
          
          <div className="timeline">
            {educationData.map((education, index) => (
              <EducationCard 
                key={index}
                education={education}
                isFeatured={index === 0}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
