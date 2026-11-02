import "./Home.css";
import { Avatar } from "@mui/material";

export const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">

          <h1>Hey, there! This is Al Amru Bil Maruf!</h1>

          <p>
            I am a backend engineer based in Dhaka, Bangladesh, working mostly in Java/Spring Boot and Go. I am a main contributor to the live-streaming backend of Convay, a video conferencing platform, load-tested at 10k concurrent viewers.
            Most of my work is about keeping services correct under load: locking, caching, message queues and load tests. I am open for collaborative research work.
          </p>

          <p>
            Reach me through my socials!
          </p>
        </div>
        <div className="profile-image">
          <Avatar
            src="./images/al-amru-bil-maruf.jpg"
            alt="Al Amru Bil Maruf"
            sx={{ width: 250, height: 250 }}
          />
        </div>
      </section>

      <section >
        <h2 className="batman">Have you ever wondered why you haven't seen the Batman and me in the same room? 🦇</h2>
      </section>
    </div>
  );
};
