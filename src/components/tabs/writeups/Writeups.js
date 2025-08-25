import React from 'react';
import './Writeups.css';

export const Writeups = () => {
  const articles = [
    {
      id: 1,
      title: "Spring Boot Profiling",
      description: "A comprehensive guide about configuring and using different profiles in Spring Boot applications",
      link: "https://feline-week-e64.notion.site/Spring-Boot-Profiling-f6cce511e83a41ada33e5e98f3d8124e?pvs=4",
      tags: ["Spring Boot", "Java", "Backend"],
      date: "2024"
    },
    {
      id: 2,
      title: "Building Microservices in Spring Boot",
      description: "A beginner's guide on building microservices in Spring Boot with Eureka",
      link: "https://feline-week-e64.notion.site/Building-Microservices-in-Spring-Boot-with-Eureka-1405ba87cb0b806ba922ed1f6d91f1f9?pvs=4",
      tags: ["Spring Boot", "Java", "Micrservices"],
      date: "2024"
    },
    {
      id: 3,
      title: "Understanding JWTs",
      description: "A detailed explanation of JSON Web Tokens (JWTs) and their creation process",
      link: "https://www.notion.so/Understanding-JWTs-1cd5ba87cb0b8037b4bdc7029b39d4a5",
      tags: ["JWT", "Encryption"],
      date: "2025"
    }
  ];

  return (
    <div className="writeups-container">
      <div className="writeups-header">
      </div>
      <div className="articles-grid">
        {articles.map((article) => (
          <a 
            href={article.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="article-card" 
            key={article.id}
          >
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <div className="article-footer">
              <div className="tags">
                {article.tags.map((articleTag) => (
                  <span key={articleTag} className="tag">{articleTag}</span>
                ))}
              </div>
              <span className="date">{article.date}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
