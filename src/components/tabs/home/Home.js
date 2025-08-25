import "./Home.css";
import { Avatar } from "@mui/material";

export const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">

          <h1>Hey, there! This is Al Amru Bil Maruf!</h1>

          <p>
            I am a full-stack developer based in Dhaka, Bangladesh. My work domain currently revolves around developing video conferincing solutions. I am open for collaborative research work.
            I am constantly trying to learn new technologies and best practices. My core focus is on creating efficient, maintainable and scalable code.
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
