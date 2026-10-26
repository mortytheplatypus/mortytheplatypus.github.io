import './Writeups.css';

const NOTION_BASE_URL = "https://mortytheplatypus.notion.site";

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export const Writeups = () => {
  const articles = [
    {
      id: 1,
      title: "Browsers and their obsession with Preflights",
      description: "Understanding CORS preflight requests and how different browsers handle them",
      link: `${NOTION_BASE_URL}/Browsers-and-their-obession-with-Preflights-2ba5ba87cb0b80aab44afa364b69f509e`,
      tags: ["CORS", "Backend"],
    },
    {
      id: 2,
      title: "Understanding JWTs",
      description: "A detailed explanation of JSON Web Tokens and their creation process",
      link: `${NOTION_BASE_URL}/Understanding-JWTs-1cd5ba87cb0b8037b4bdc7029b39d4a5`,
      tags: ["JWT", "Encryption"],
    },
    {
      id: 3,
      title: "Building Microservices in Spring Boot",
      description: "A beginner's guide on building microservices in Spring Boot with Eureka",
      link: `${NOTION_BASE_URL}/Building-Microservices-in-Spring-Boot-with-Eureka-1405ba87cb0b806ba922ed1f6d91f1f9`,
      tags: ["Spring Boot", "Java", "Microservices"],
    },
    {
      id: 4,
      title: "Spring Boot Profiling",
      description: "Configuring and using different profiles in Spring Boot applications",
      link: `${NOTION_BASE_URL}/Spring-Boot-Profiling-f6cce511e83a41ada33e5e98f3d8124e`,
      tags: ["Spring Boot", "Java", "Backend"],
    },
    {
      id: 5,
      title: "Who Gets the Last Ticket?",
      description: "A dive into pessimistic and optimistic locking in SQL databases",
      link: `${NOTION_BASE_URL}/Who-Gets-the-Last-Ticket-3b55ba87cb0b80ff8062c401f32dd3e0?source=copy_link`,
      tags: ["SQL", "Pessimistic Locking", "Optimistic Locking", "Backend"],
    },
    {
      id: 6,
      title: "Docker Misbehaving (?!)",
      description: "Debugging why Docker Compose replaces one container with the another with different configurations",
      link: `${NOTION_BASE_URL}/Docker-Misbehaving-3f75ba87cb0b8092bd6bf0d50fa3303e`,
      tags: ["Docker", "Containerization", "Backend"],
    },
  ];

  return (
    <div className="writeups-container">
      <div className="articles-grid">
        {articles.map((article, index) => (
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="article-card"
            title={article.link}
            key={article.id}
          >
            <span className="article-index">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className="article-body">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="article-footer">
                <div className="tags">
                  {article.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="article-right">
              <div className="link-icon">
                <ExternalLinkIcon />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
