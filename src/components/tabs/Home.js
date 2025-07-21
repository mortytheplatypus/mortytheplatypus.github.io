import SplitText from "../SplitText";
import "./Home.css";
import { Avatar } from "@mui/material";

export const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">

          <SplitText
            text="Hello! This is Al Amru Bil Maruf"
            className="text-4xl font-semibold text-center bg-red-500"
            delay={100}
            duration={0.1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            fontSize="2rem"
            fontWeight="900"
            onLetterAnimationComplete={() => { }}
          />

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
