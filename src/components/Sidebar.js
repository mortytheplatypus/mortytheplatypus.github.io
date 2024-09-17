import React from "react";
import { Avatar, Box, Typography, IconButton, Link } from "@mui/material";
import Typical from "react-typical";

function Sidebar() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          mt: 2,
          bgcolor: "#EAEADD",
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Avatar
          src="./images/al-amru-bil-maruf.jpg"
          alt="Al Amru Bil Maruf"
          sx={{ width: 250, height: 250, mt: 3, mb: 4 }}
        />

        <Typography variant="h4" sx={{ mb: 1 }}>
          <b>Al Amru Bil Maruf</b>
        </Typography>

        <Typography variant="body2" sx={{ mb: 0.6 }}>
          Platypus | Software Engineer | Cinephile
        </Typography>

        <blockquote
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "1rem",
            textAlign: "center",
            padding: "8px",
          }}
        >
          "If it walks like a duck and quacks like a duck, it is a duck."
        </blockquote>

        <hr style={{ width: "80%", border: "1px solid #333333" }} />

        <Box sx={{ mt: 1, mb: 1 }}>
          <IconButton
            component={Link}
            href="https://linkedin.com/in/mortytheplatypus"
            target="_blank"
            aria-label="LinkedIn"
          >
            <img
              src="/icons/linkedin.png"
              alt="LinkedIn"
              width={32}
              height={32}
            />
          </IconButton>
          <IconButton
            component={Link}
            href="https://github.com/mortytheplatypus"
            target="_blank"
            aria-label="GitHub"
          >
            <img src="/icons/github.png" alt="GitHub" width={32} height={32} />
          </IconButton>
          <IconButton
            component={Link}
            href="https://facebook.com/mortytheplatypus"
            target="_blank"
            aria-label="Facebook"
          >
            <img
              src="/icons/facebook.png"
              alt="Facebook"
              width={32}
              height={32}
            />
          </IconButton>
          <IconButton
            component={Link}
            href="https://x.com/alamrubilmaruf_"
            target="_blank"
            aria-label="X"
          >
            <img src="/icons/x.png" alt="X" width={32} height={32} />
          </IconButton>
          <IconButton
            component={Link}
            href="mailto:mortytheplatypus@gmail.com"
            target="_blank"
            aria-label="Email"
          >
            <img src="/icons/email.png" alt="Email" width={32} height={32} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
