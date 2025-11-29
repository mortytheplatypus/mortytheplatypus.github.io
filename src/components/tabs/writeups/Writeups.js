import './Writeups.css';

const NOTION_BASE_URL = "https://mortytheplatypus.notion.site";

export const Writeups = () => {
  const articles = [
    {
      id: 1,
      title: "Browsers and their obession with Preflights",
      description: "Understanding CORS preflight requests and how different browsers handle them",
      link: `${NOTION_BASE_URL}/Browsers-and-their-obession-with-Preflights-2ba5ba87cb0b80aab44afa364b69f509e`,
      tags: ["CORS", "Backend"],
      date: "2025"
    },
    {
      id: 2,
      title: "Understanding JWTs",
      description: "A detailed explanation of JSON Web Tokens (JWTs) and their creation process",
      link: `${NOTION_BASE_URL}/Understanding-JWTs-1cd5ba87cb0b8037b4bdc7029b39d4a5`,
      tags: ["JWT", "Encryption"],
      date: "2025"
    },
    {
      id: 3,
      title: "Building Microservices in Spring Boot",
      description: "A beginner's guide on building microservices in Spring Boot with Eureka",
      link: `${NOTION_BASE_URL}/Building-Microservices-in-Spring-Boot-with-Eureka-1405ba87cb0b806ba922ed1f6d91f1f9`,
      tags: ["Spring Boot", "Java", "Micrservices"],
      date: "2024"
    },
    {
      id: 1,
      title: "Spring Boot Profiling",
      description: "A comprehensive guide about configuring and using different profiles in Spring Boot applications",
      link: `${NOTION_BASE_URL}/Spring-Boot-Profiling-f6cce511e83a41ada33e5e98f3d8124e`,
      tags: ["Spring Boot", "Java", "Backend"],
      date: "2024"
    },
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
