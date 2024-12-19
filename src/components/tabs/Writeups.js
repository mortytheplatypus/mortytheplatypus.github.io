import React from 'react';
import './Writeups.css';

export const Writeups = () => {
  const articles = [
    {
      title: "Spring Boot Profiling",
      description: "A comprehensive guide about configuring and using different profiles in Spring Boot applications",
      link: "https://feline-week-e64.notion.site/Spring-Boot-Profiling-f6cce511e83a41ada33e5e98f3d8124e?pvs=4",
      tags: ["Spring Boot", "Java", "Backend"],
      date: "2024"
    },
    {
      
      title: "Building Microservices in Spring Boot",
      description: "A beginner's guide on building microservices in Spring Boot with Eureka",
      link: "https://feline-week-e64.notion.site/Building-Microservices-in-Spring-Boot-with-Eureka-1405ba87cb0b806ba922ed1f6d91f1f9?pvs=4",
      tags: ["Spring Boot", "Java", "Micrservices"],
      date: "2024"
    }
  ];

  return (
    <div className="writeups-container">
      <div className="writeups-header">
      </div>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <a 
            href={article.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="article-card" 
            key={index}
          >
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <div className="article-footer">
              <div className="tags">
                {article.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
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
