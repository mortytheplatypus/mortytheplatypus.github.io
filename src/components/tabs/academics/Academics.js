import React from "react";
import PropTypes from "prop-types";
import "./Academics.css";

const experienceData = [
  {
    period: "May 2024 - Present",
    isCurrent: true,
    position: "Software Engineer",
    company: "Synesis IT PLC",
    description:
      "Contributing to the full-stack development of Convay, a cutting-edge video conferencing platform. Leading feature development initiatives, implementing critical bug fixes, and driving code refactoring efforts while maintaining industry best practices to deliver exceptional user experiences.",
    techStack: [
      "Spring Boot",
      "React",
      "Docker",
      "WebSocket",
      "Liquibase",
      "MySQL",
      "Cassandra",
      "Redis",
      "Kafka",
      "Nginx",
    ],
  },
  {
    period: "May 2023 - June 2023",
    isCurrent: false,
    duration: "2 months",
    position: "Software Developer Intern",
    company: "MySoft Limited",
    description:
      "Specialized in healthcare big data management and analytics during undergraduate studies. Developed data-driven solutions to identify trends and patterns, optimizing operational efficiency and enhancing service delivery for hospitals and patients.",
    techStack: [
      "Flask",
      "Angular",
      "PostgreSQL",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
    ],
  },
];

const educationData = [
  {
    period: "2019 - 2023",
    badgeType: "achievement",
    badgeText: "Bachelor's",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    degree: "Bachelor of Science in Computer Science and Engineering",
    description:
      "Completed my undergraduate degree at Bangladesh's premier engineering institution. This transformative period laid the foundation for my technical expertise and professional development, marking the most impactful phase of my academic journey.",
    highlights: [
      {
        label: "Focus",
        value: "Software Engineering & Data Structures",
      },
    ],
  },
  {
    period: "2016 - 2018",
    badgeType: "level",
    badgeText: "HSC",
    institution: "Dinajpur Government College",
    degree: "Higher Secondary Certificate (HSC)",
    description:
      "Completed higher secondary education with specialization in Science stream, building strong fundamentals in mathematics, physics, and chemistry that prepared me for engineering studies.",
  },
  {
    period: "2008 - 2016",
    badgeType: "level",
    badgeText: "SSC",
    institution: "Dinajpur Zilla School",
    degree: "Secondary School Certificate (SSC)",
    description:
      "Spent my formative academic years from Class 3 to 10, developing strong analytical thinking and problem-solving skills that became the cornerstone of my educational foundation.",
  }
];

const ExperienceCard = ({ experience, isFeatured = false }) => {
  return (
    <div className={`experience-card ${isFeatured ? "featured" : ""}`}>
      <div className="card-layout">
        <div className="company-info">
          <h3 className="company-name">{experience.company}</h3>
          <p className="job-title">{experience.position}</p>
          <p className="period-text">{experience.period}</p>
        </div>

        <div className="description-section">
          <p className="description">{experience.description}</p>
          <div className="tech-stack-box">
            <div className="tech-stack">
              {experience.techStack.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.object.isRequired,
  isFeatured: PropTypes.bool,
};

const EducationCard = ({ education, isFeatured = false }) => {
  return (
    <div className={`education-card ${isFeatured ? "featured" : ""}`}>
      <div className="card-content">
        <h3>{education.institution}</h3>
        <p className="degree">{education.degree}</p>
        <div className="period">{education.period}</div>
        <p className="description">{education.description}</p>
      </div>
    </div>
  );
};

EducationCard.propTypes = {
  education: PropTypes.object.isRequired,
  isFeatured: PropTypes.bool,
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
                key={experience.company}
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
            {/* BUET - standalone */}
            <EducationCard
              key={educationData[0].badgeText}
              education={educationData[0]}
              isFeatured={true}
            />
            
            {/* HSC and SSC - side by side */}
            <div className="education-row">
              <EducationCard
                key={educationData[1].badgeText}
                education={educationData[1]}
                isFeatured={false}
              />
              <EducationCard
                key={educationData[2].badgeText}
                education={educationData[2]}
                isFeatured={false}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
