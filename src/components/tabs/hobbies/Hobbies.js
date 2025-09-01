import React from "react";
import "./Hobbies.css";

export const Hobbies = () => {
  return (
    <div className="hobbies-container">
      <section className="hobby-section cinema">
        <div className="letterboxd-showcase">
          <div className="letterboxd-profile">
            <div className="letterboxd-header">
              <span>Explore my cinephilia</span>
              <a
                href="https://letterboxd.com/theblueduck"
                target="_blank"
                rel="noopener noreferrer"
                className="letterboxd-profile-link"
              >
                @theblueduck
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
          <span className="chelsea-slogan">
            Keep The Blue Flag Flying High!{' '}
            <a
              href="https://x.com/search?q=%23KTBFFH"
              target="_blank"
              rel="noopener noreferrer"
              className="chelsea-hashtag"
            >
              #KTBFFH
            </a>
          </span>
        </div>
        <div className="sports-showcase">
          <div className="team-card chelsea">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/200px-Chelsea_FC.svg.png"
              alt="Chelsea FC"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
