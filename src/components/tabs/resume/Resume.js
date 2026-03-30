import React from 'react';
import './Resume.css';

export default function Resume() {
    return (
        <div className="resume-container">
            <div className="resume-content">
                {/* HEADER */}
                <header className="resume-header">
                    <h1>AL AMRU BIL MARUF</h1>
                    <h2>Software Engineer</h2>
                    <div className="contact-info">
                        <span>+8801788268495</span> • 
                        <span>Dhaka, Bangladesh</span> • 
                        <a href="mailto:alamrubilmaruf412@gmail.com">alamrubilmaruf412@gmail.com</a> • 
                        <a href="https://mortytheplatypus.github.io/" target="_blank" rel="noreferrer">mortytheplatypus.github.io</a>
                    </div>
                </header>

                {/* SKILLS */}
                <section className="resume-section">
                    <h3 className="section-title">Skills</h3>
                    <div className="skills-grid">
                        <div className="skill-category"><strong>Languages:</strong> Java, JavaScript, Python, C/C++, Bash</div>
                        <div className="skill-category"><strong>Frameworks:</strong> Spring Boot, React, Next.js, Express.js, Flask</div>
                        <div className="skill-category"><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Cassandra</div>
                        <div className="skill-category"><strong>Infra:</strong> Nginx, Docker, Kafka, Redis, CDN, RTMP, HLS, Coroot</div>
                        <div className="skill-category"><strong>Tools/Protocols:</strong> Git, Liquibase, Locust, Websocket, JWT</div>
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section className="resume-section">
                    <h3 className="section-title">Experience</h3>
                    
                    <div className="experience-item">
                        <div className="experience-header">
                            <div>
                                <h4>Synesis IT PLC</h4>
                                <h5>Software Engineer</h5>
                            </div>
                            <span className="date">June 2024 — Present</span>
                        </div>
                        <p className="experience-summary">Core contributor to <a href="https://convay.com" target="_blank" rel="noreferrer">Convay</a>, a high-scale video conferencing platform.</p>
                        <ul>
                            <li><strong>Infrastructure Optimization:</strong> Architected an HLS edge-caching strategy that resolved critical bottlenecks where 32-core CPUs were maxing out at 1Gbps; successfully scaled delivery to 10k+ concurrent viewers with near-zero increase in origin load.</li>
                            <li><strong>Load Testing:</strong> Designed and executed simulations for 12k live WebSocket participants using Locust, identifying and fixing distributed messaging bottlenecks in the Spring Boot/Kafka layer.</li>
                            <li><strong>Feature Development:</strong> Developed RBAC, scheduling logic, and custom end-to-end messaging protocols for the core meeting engine.</li>
                            <li><strong>Observability:</strong> Utilized Coroot to monitor system health and proactively debug performance regressions in production.</li>
                        </ul>
                        <p className="tech-stack"><strong>Tech Stack:</strong> Spring Boot, React, Kafka, Docker, Nginx, Cassandra, MySQL, Liquibase</p>
                    </div>

                    <div className="experience-item">
                        <div className="experience-header">
                            <div>
                                <h4>Sentien IO</h4>
                                <h5>Frontend Engineer</h5>
                            </div>
                            <span className="date">Dec 2023 — May 2024</span>
                        </div>
                        <p className="experience-summary">Lead the frontend development and UI/UX design for this AI-driven interview preparation platform.</p>
                        <ul>
                            <li><strong>Core User Journey:</strong> Developed a multi-step flow for interviewer selection, resume uploading, and targeted role tracking.</li>
                            <li><strong>Dashboards & Analytics:</strong> Developed interactive user portals to manage saved jobs, track interview histories, and visualize actionable post-interview feedback via dynamic charts and gamified metrics.</li>
                        </ul>
                        <p className="tech-stack"><strong>Tech Stack:</strong> React, Next.js, TypeScript, Tailwind CSS, Recharts</p>
                    </div>

                    <div className="experience-item">
                        <div className="experience-header">
                            <div>
                                <h4>MYSOFT LIMITED</h4>
                                <h5>Health Analytics Intern</h5>
                            </div>
                            <span className="date">May 2023 — June 2023</span>
                        </div>
                        <p className="experience-summary">Developed a real-time health analytics dashboard to visualize hospital data trends.</p>
                        <ul>
                            <li>Processed multi-dimensional health datasets to identify regional and seasonal disease outbreaks based on patient demographics (age, gender, location).</li>
                            <li>Built a full-stack application using Flask and Angular to provide hospital administrators with actionable insights into operational overhead.</li>
                        </ul>
                        <p className="tech-stack"><strong>Tech Stack:</strong> Flask, Angular, PostgreSQL</p>
                    </div>
                </section>

                {/* PROJECTS */}
                <section className="resume-section">
                    <h3 className="section-title">Projects</h3>
                    
                    <div className="project-item">
                        <div className="project-header">
                            <h4>Jwt Authenticator <span className="project-links">(<a href="https://github.com/mortytheplatypus/jwt-authenticator">GitHub</a>)</span></h4>
                            <span className="tech-tags">PostgreSQL, Spring Boot</span>
                        </div>
                        <p>Developed a reusable full-stack authentication template providing secure registration and session management using JSON Web Tokens (JWT), designed for rapid integration into new web applications.</p>
                    </div>

                    <div className="project-item">
                        <div className="project-header">
                            <h4>Find My Apartment <span className="project-links">(<a href="https://github.com/mortytheplatypus/find-my-apartment-api">Backend</a> | <a href="https://github.com/mortytheplatypus/find-my-apartment-frontend">Frontend</a>)</span></h4>
                            <span className="tech-tags">Next.js, Express.js</span>
                        </div>
                        <p>Built an apartment-search platform with advanced filtering, personalized recommendation logic, and integrated map views for enhanced user experience.</p>
                    </div>

                    <div className="project-item">
                        <div className="project-header">
                            <h4>Pasteruf <span className="project-links">(<a href="https://github.com/mortytheplatypus/pasteruf-backend">GitHub</a>)</span></h4>
                            <span className="tech-tags">Flask, React</span>
                        </div>
                        <p>Engineered a dual-purpose platform for persistent text storage and URL shortening. Features automatic redirection logic and a streamlined interface for sharing content across platforms.</p>
                    </div>

                    <div className="project-item">
                        <div className="project-header">
                            <h4>Fantasy Premier League <span className="project-links">(<a href="https://github.com/mortytheplatypus/FantasyPremierLeagueCSE216">GitHub</a>)</span></h4>
                            <span className="tech-tags">PLSQL, React, Express.js</span>
                        </div>
                        <p>Replicating Fantasy Premier League, which allows users to create fantasy football teams, select players, and compete in leagues.</p>
                    </div>
                </section>

                {/* EDUCATION & OTHERS */}
                <div className="bottom-sections">
                    <section className="resume-section flex-1">
                        <h3 className="section-title">Education</h3>
                        <div className="education-item">
                            <h4>Bangladesh University of Engineering and Technology</h4>
                            <h5>BSc in CSE</h5>
                            <p className="date">2019 — 2024</p>
                            <p><strong>CGPA:</strong> 3.48/4.00</p>
                            <p><strong>Thesis:</strong> Handwritten Bangla Character Recognition Using Convolutional Neural Networks (CNN)</p>
                        </div>
                    </section>

                    <section className="resume-section flex-1">
                        <h3 className="section-title">Others</h3>
                        <ul className="others-list">
                            <li>Fluent in Bengali and English</li>
                            <li>Senior Member and Mentor in Dinajpur Math Club</li>
                        </ul>
                    </section>
                </div>
            </div>
            <div className="resume-footer-actions">
                <a 
                    href="/assets/pdf/al_amru_bil_maruf_cv.pdf" 
                    download="al_amru_bil_maruf_cv.pdf"
                    className="download-button"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{marginRight: '8px'}}>
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                    Download PDF
                </a>
            </div>
        </div>
    );
}
