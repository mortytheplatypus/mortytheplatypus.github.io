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

                {/* SUMMARY */}
                <section className="resume-section">
                    <h3 className="section-title">Summary</h3>
                    <p>Backend engineer with 2+ years at Synesis IT, mostly in Java/Spring Boot and Go. I am one of main contributors to the live-streaming backend for Convay, load-tested at 10k concurrent viewers. Most of my work is about keeping services correct under load: locking, caching, message queues and load tests.</p>
                </section>

                {/* SKILLS */}
                <section className="resume-section">
                    <h3 className="section-title">Skills</h3>
                    <div className="skills-grid">
                        <div className="skill-category"><strong>Languages:</strong> Java, Go, Python, JavaScript, TypeScript, SQL, C++, Bash</div>
                        <div className="skill-category"><strong>Backend:</strong> Spring Boot, Express.js, Flask, REST, WebSocket/STOMP, JWT</div>
                        <div className="skill-category"><strong>Data/Messaging:</strong> MySQL, PostgreSQL, Cassandra, MongoDB, Redis, Kafka, RabbitMQ</div>
                        <div className="skill-category"><strong>Infra/Tools:</strong> Docker, Nginx, Cloudflare R2/CDN, HLS, RTMP, Eureka, Consul, Liquibase, Locust, Prometheus, Coroot, Git</div>
                        <div className="skill-category"><strong>Frontend:</strong> React, Next.js</div>
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section className="resume-section">
                    <h3 className="section-title">Experience</h3>
                    
                    <div className="experience-item">
                        <div className="experience-header">
                            <div>
                                <h4>Synesis IT PLC</h4>
                                <h5 className="role">Software Engineer II</h5>
                            </div>
                            <span className="date">June 2024 — Present</span>
                        </div>
                        <p className="experience-summary">Software engineer on <a href="https://convay.com" target="_blank" rel="noreferrer">Convay</a>, a video conferencing platform. One of the main contributors to the services behind large-meeting live streaming.</p>
                        <ul>
                            <li><strong>Streaming at Scale:</strong> Designed a gated HLS delivery platform (Spring Boot control plane, Go origins, Cloudflare R2/CDN offload) so live streams scale past a single origin; load-tested at 10k concurrent viewers with ~0% failures across 188k playlist/segment requests.</li>
                            <li><strong>Abuse-Resistant Access:</strong> Secured playlists and segments with JWTs and kept the hot path in memory via an ownership cache with a rate-limited DB fallback (30 lookups/min per client), shielding service from forged stream-ID floods.</li>
                            <li><strong>Race-Safe Allocation:</strong> Sole developer of the service that manages a pool of streaming servers, assigning one per live stream and releasing it when the stream ends. Uses compare-and-set allocation with retries so concurrent meetings never get the same server, rotates the stream keys on every assignment, and runs scheduled checks that return stale servers to the pool.</li>
                            <li><strong>Realtime Messaging:</strong> Built chat and presence services on Kafka, Cassandra, Redis and RabbitMQ. Presence updates go out in 3s batches and user lists are capped, which held up in soak tests with 4k WebSocket connections per instance.</li>
                            <li><strong>Meeting Features:</strong> Built hosts-only group messaging across the XMPP signaling layer (Prosody), client SDK and web UI, with history replay so late joiners and newly promoted hosts catch up. Also added a picture-in-picture overlay for screen-share video.</li>
                            <li><strong>Usage Billing:</strong> Wrote the billing service that pulls viewer analytics data from Cloudflare Analytics in windows and backfills any window that fails.</li>
                        </ul>
                        <p className="tech-stack"><strong>Tech Stack:</strong> Java, Spring Boot, Go, Kafka, Cassandra, Redis, RabbitMQ, MySQL, Docker, Cloudflare R2, Locust, Prometheus, Coroot</p>
                    </div>

                    <div className="experience-item">
                        <div className="experience-header">
                            <div>
                                <h4>MYSOFT LIMITED</h4>
                                <h5>Health Analytics Intern</h5>
                            </div>
                            <span className="date">May 2023 — June 2023</span>
                        </div>
                        <p className="experience-summary">Built a Flask, Angular and PostgreSQL dashboard showing regional and seasonal disease trends in hospital data, broken down by age, gender and location.</p>
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
                        <p>Log ingestion service. Each service gets its own write-ahead log, and writes go through bounded queues that push back when full. Supports offset-based reads, live tailing over SSE, and log rotation and retention.</p>
                    </div>

                    <div className="project-item">
                        <div className="project-header">
                            <h4>JWT Authenticator <span className="project-links">(<a href="https://github.com/mortytheplatypus/JWT-authenticator">GitHub</a>)</span></h4>
                            <span className="tech-tags">PostgreSQL, Spring Boot</span>
                        </div>
                        <p>Registration and JWT session handling, built as a starting point for new web apps.</p>
                    </div>

                    <div className="project-item">
                        <div className="project-header">
                            <h4>Pasteruf <span className="project-links">(<a href="https://github.com/mortytheplatypus/pasteruf-backend">GitHub</a>)</span></h4>
                            <span className="tech-tags">Flask, React</span>
                        </div>
                        <p>A pastebin and URL shortener in one: saves text snippets and redirects short links.</p>
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
