import React from "react";
import "./Navbar.css";
import { Box, IconButton, Link } from "@mui/material";
import { TabContainer } from "../TabContainer";

export const Navbar = () => {
  return (
    <div className="navbar">
      <button className="hello" onClick={() => {
        window.location.href = "/";
      }}>
        mortytheplatypus
      </button>

      <div className="tabs">
        <TabContainer />
      </div>

      <div className="socials">
        <Box>
          <IconButton
            component={Link}
            href="https://linkedin.com/in/mortytheplatypus"
            target="_blank"
            aria-label="LinkedIn"
            title="mortytheplatypus"
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
            href="https://facebook.com/mortytheplatypus"
            target="_blank"
            aria-label="Facebook"
            title="mortytheplatypus"
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
            title="alamrubilmaruf_"
          >
            <img src="/icons/x.png" alt="X" width={32} height={32} />
          </IconButton>
        </Box>
      </div>
    </div>
  );
};
