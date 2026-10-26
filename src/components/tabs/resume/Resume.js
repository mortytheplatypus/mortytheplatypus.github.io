import React from 'react';
import './Resume.css';

export default function Resume() {
    return (
        <div className="resume-container">
            <div className="resume-content">
                {/* HEADER */}
                <header className="resume-header">
                    <h1>AL AMRU BIL MARUF</h1>
                    <h2>Software Engineer II</h2>
                    <div className="contact-info">
                        <span>+8801788268495</span> •
                        <span>Dhaka, Bangladesh</span> •
                        <a href="mailto:alamrubilmaruf412@gmail.com">alamrubilmaruf412@gmail.com</a> •
                        <a href="https://github.com/mortytheplatypus" target="_blank" rel="noreferrer">mortytheplatypus</a>
                    </div>
                </header>

                {/* SKILLS */}
                <section className="resume-section">
                    <h3 className="section-title">Skills</h3>
                    <div className="skills-grid">
                        <div className="skill-category"><strong>Languages:</strong> Java, JavaScript, Go, Python, C/C++, Bash</div>
                        <div className="skill-category"><strong>Frameworks:</strong> Spring Boot, React, Next.js, Express.js (NodeJS), Flask</div>
                        <div className="skill-category"><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Cassandra</div>
                        <div className="skill-category"><strong>Infrastructure:</strong> Nginx, Docker, Kafka, Redis, RabbitMQ, CDN, RTMP, HLS, Cloudflare R2</div>
                        <div className="skill-category"><strong>Tools/Protocols:</strong> Git, Liquibase, Locust, WebSocket, XMPP, JWT, Eureka, Consul</div>
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section className="resume-section">
                    <h3 className="section-title">Experience</h3>
                    
                    <div className="experience-item">
                        <div className="experience-header">
                            <div>
                                <h4>Synesis IT PLC</h4>
                                <h5 className="role">Software Engineer II <span className="role-date">June 2026 - Present</span></h5>
                                <h5 className="role role-previous">Software Engineer I <span className="role-date">June 2024 - May 2026</span></h5>
                            </div>
                            <span className="date">June 2024 — Present</span>
                        </div>
                        <p className="experience-summary">Core contributor to <a href="https://convay.com" target="_blank" rel="noreferrer">Convay</a>, a high-scale video conferencing platform.</p>
                        <ul>
                            <li><strong>Streaming at Scale:</strong> Designed a gated multi-origin HLS platform (control plane, race-safe origin pool, Cloudflare R2 offload) so live delivery scales past origin limits--JWT playlist/segment auth and abuse-resistant ownership caching under CDN load; Locust-validated at 10k concurrent viewers with near-zero playlist failure on healthy paths.</li>
                            <li><strong>Realtime Messaging:</strong> Built Spring Boot chat microservices on Kafka, Cassandra, and Redis with presence batching and WebSocket fan-out for multi-thousand concurrent participants; soak-tested to 4k STOMP connections per instance.</li>
                            <li><strong>Webinar Protocol:</strong> Shipped hosts-only guest messaging end-to-end across the signaling layer, realtime client SDK, and web UI, including history replay so late joiners and promoted hosts stay in sync in large rooms.</li>
                            <li><strong>Meeting Orchestration:</strong> Developed big-meeting livestream initiation with single-flight concurrency control, streaming origin pool acquire/release and failover, and HMAC-signed enterprise guest join links.</li>
                            <li><strong>Usage Billing:</strong> Built a Cloudflare Analytics pipeline that aggregates concurrent viewers and viewer-minutes on lagged sync windows, with failure backfill and VOD delivery metrics for stream monetization.</li>
                        </ul>
                        <p className="tech-stack"><strong>Tech Stack:</strong> Spring Boot, Go, React, Kafka, Cassandra, Redis, MySQL, Docker, Cloudflare R2, Locust</p>
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
                            <h4>Gozzle <span className="project-links">(<a href="https://github.com/mortytheplatypus/gozzle">GitHub</a>)</span></h4>
                            <span className="tech-tags">Go</span>
                        </div>
                        <p>A log-ingestion service with per-service WAL storage, bounded async queues with backpressure, offset-based reads, SSE live tailing, log rotation and retention.</p>
                    </div>

                    <div className="project-item">
                        <div className="project-header">
                            <h4>JWT Authenticator <span className="project-links">(<a href="https://github.com/mortytheplatypus/jwt-authenticator">GitHub</a>)</span></h4>
                            <span className="tech-tags">PostgreSQL, Spring Boot</span>
                        </div>
                        <p>Reusable Spring Boot + PostgreSQL auth starter: registration/login, JWT-backed sessions, and layout intended for reuse when spinning up new services.</p>
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
                            <span className="tech-tags">PL/SQL, React, Express.js</span>
                        </div>
                        <p>Replica of Fantasy Premier League, which allows users to create fantasy football teams, select players, and compete in leagues.</p>
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
