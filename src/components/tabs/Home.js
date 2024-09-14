import React from "react";
import { Box, Typography, Button, Grid, Chip } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3, md: 2 },
        pt: 0,
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      {/* Welcome Message */}
      <Typography variant="h4" component="h1" gutterBottom>
        Hi there 👋
      </Typography>
      <Typography variant="body1" paragraph>
        🔭 I'm currently working as a Software Engineer and my work domain
        revolves around developing video conferencing solutions.
      </Typography>
      <Typography variant="body1" paragraph>
        ⚡ I'm looking to collaborate on ML research projects.
      </Typography>
      <Typography variant="body1" paragraph>
        🌱 Reach me, and we'll talk about movies all day! Check out my
        <a
          href="https://letterboxd.com/theblueduck"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#2C343F",
            textDecoration: "none",
            marginLeft: "4px",
            fontWeight: "bold",
          }}
        >
          Letterboxd
        </a>
        !
      </Typography>
      <br />

      {/* Skills Section */}
      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
        💻 Tech Stack
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {[
          "C/C++",
          "JavaScript",
          "Python",
          "Java",
          "Bash",
          "React",
          "Next",
          "Node.js",
          "Express.js",
          "Spring Boot",
          "Docker",
          "MongoDB",
          "Postgres",
          "MySQL",
          "MUI",
          "Git",
          "TailwindCSS",
        ].map((tech) => (
          <Chip label={tech} key={tech} sx={{ margin: 0.5 }} />
        ))}
      </Box>

      {/* GitHub Stats */}
      {/* <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
        📊 GitHub Stats
      </Typography>
      <Box sx={{ mt: 2 }}>
        <img 
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=mortytheplatypus&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact" 
          alt="Top Languages" 
          style={{ width: '100%', borderRadius: '8px' }}
        />
      </Box> */}
      {/* <br/> */}

      {/* Fun Quote */}
      {/* <Typography variant="body2" paragraph sx={{ mt: 4.8, fontStyle: 'italic', color: '#444444' }}>
        "When I wrote this code, only God and I understood what I did. Now only God knows." - Anonymous
      </Typography> */}

      <Box
        sx={{
          fontSize: "0.8rem",
          fontFamily: "'Georgia', serif",
          fontStyle: "italic",
          mt: 4,
        }}
      >
        🧠 Have you ever wondered why you haven't seen batman and me in the same
        room together?
      </Box>
    </Box>
  );
}

export default Home;
