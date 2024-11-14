import React from "react";
import "./Hobbies.css";

export const Hobbies = () => {
  return (
    <div className="hobbies-container">
      <section className="hobby-section cinema">
        <div className="hobby-header">
          <h2>Cinema Enthusiast</h2>
        </div>
        <div className="letterboxd-showcase">
          <div className="letterboxd-profile">
            <div className="letterboxd-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Check out my Letterboxd <a
                href="https://letterboxd.com/theblueduck"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'var(--primary-color)', fontWeight: 'bold' }}
              >
                <b style={{ fontSize: 'larger' }}><u>@theblueduck</u></b>
              </a>
            </div>
          </div>
          <div className="movie-grid">
            <a href="https://letterboxd.com/film/metropolis/" target="_blank" rel="noopener noreferrer" className="movie-card">
              <img
                src="https://m.media-amazon.com/images/I/61y7Z35nxJL._SL1000_.jpg"
                alt="Metropolis"
              />
              <span>Metropolis</span>
            </a>
            <a href="https://letterboxd.com/film/vertigo/" target="_blank" rel="noopener noreferrer" className="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
                alt="Vertigo"
              />
              <span>Vertigo</span>
            </a>
            <a href="https://letterboxd.com/film/citizen-kane/" target="_blank" rel="noopener noreferrer" className="movie-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                alt="Citizen Kane"
              />
              <span>Citizen Kane</span>
            </a>
            <a href="https://letterboxd.com/film/lawrence-of-arabia/" target="_blank" rel="noopener noreferrer" className="movie-card">
              <img
                src="https://m.media-amazon.com/images/I/81edKmbZnhL._SL1500_.jpg"
                alt="Lawrence of Arabia"
              />
              <span>Lawrence of Arabia</span>
            </a>
            <a href="https://letterboxd.com/film/apocalypse-now/" target="_blank" rel="noopener noreferrer" className="movie-card">
              <img
                src="https://m.media-amazon.com/images/I/517A5XYN5AL.jpg"
                alt="Apocalypse Now"
              />
              <span>Apocalypse Now</span>
            </a>
          </div>
        </div>
      </section>

      <section className="hobby-section sports">
        <div className="hobby-header">
          <h2>Sports Fan</h2>
        </div>
        <div className="sports-showcase">
          <div className="team-card chelsea">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/200px-Chelsea_FC.svg.png"
              alt="Chelsea FC"
            />
            <span>Chelsea FC</span>
          </div>
          <div className="team-card germany">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/DFBEagle.svg/200px-DFBEagle.svg.png"
              alt="Germany National Team"
            />
            <span>Germany</span>
          </div>
          <div className="team-card cricket">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/3/3f/Cricket_Australia.png"
              alt="Cricket Australia"
            />
            <span>Cricket Australia</span>
          </div>
        </div>
      </section>

      <section className="hobby-section education">
        <div className="hobby-header">
          <h2>Educational Content</h2>
        </div>
        <div className="channel-grid">
          {[
            { name: "3Blue1Brown", topic: "Mathematics", link: "https://www.youtube.com/3blue1brown" },
            { name: "Veritasium", topic: "Science", link: "https://www.youtube.com/veritasium" },
            { name: "The B1M", topic: "Architecture", link: "https://www.youtube.com/theb1m" },
            { name: "Numberphile", topic: "Mathematics", link: "https://www.youtube.com/numberphile" },
          ].map((channel) => (
            <a href={channel.link} target="_blank" rel="noopener noreferrer" className="channel-card" key={channel.name} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>{channel.name}</h3>
              <span className="channel-topic">{channel.topic}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
