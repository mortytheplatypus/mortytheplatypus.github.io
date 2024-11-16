import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import { useEffect } from "react";

export const TabContainer = () => {
  const [value, setValue] = React.useState(0);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
      case "/home":
        setValue(0);
        break;
      case "/academics":
        setValue(1);
        break;
      case "/projects":
        setValue(2);
        break;
      case "/hobbies":
        setValue(3);
        break;
      case "/writeups":
        setValue(4);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ width: "80%", borderRadius: 1, bgcolor: "var(--primary-bg)" }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          <Tab
            label="Home"
            component={Link}
            to="/"
            sx={{
              fontWeight: value === 0 ? "bold" : "normal",
              fontSize: value === 0 ? "0.95rem" : "0.8rem",
              color: "var(--primary-text)",
              fontFamily: "Gill Sans, sans-serif",
              "&.Mui-selected": { color: "var(--primary-text-dark)" },
            }}
          />
          <Tab
            label="Academics"
            component={Link}
            to="/academics"
            sx={{
              fontWeight: value === 1 ? "bold" : "normal",
              fontSize: value === 1 ? "0.95rem" : "0.8rem",
              color: "var(--primary-text)",
              fontFamily: "Gill Sans, sans-serif",
              "&.Mui-selected": { color: "var(--primary-text-dark)" },
            }}
          />
          <Tab
            label="Projects"
            component={Link}
            to="/projects"
            sx={{
              fontWeight: value === 2 ? "bold" : "normal",
              fontSize: value === 2 ? "0.95rem" : "0.8rem",
              color: "var(--primary-text)",
              fontFamily: "Gill Sans, sans-serif",
              "&.Mui-selected": { color: "var(--primary-text-dark)" },
            }}
          />
          <Tab
            label="Hobbies"
            component={Link}
            to="/hobbies"
            sx={{
              fontWeight: value === 3 ? "bold" : "normal",
              fontSize: value === 3 ? "0.95rem" : "0.8rem",
              color: "var(--primary-text)",
              fontFamily: "Gill Sans, sans-serif",
              "&.Mui-selected": { color: "var(--primary-text-dark)" },
            }}
          />
          <Tab
            label="Writeups"
            component={Link}
            to="/writeups"
            sx={{
              fontWeight: value === 4 ? "bold" : "normal",
              fontSize: value === 4 ? "0.95rem" : "0.8rem",
              color: "var(--primary-text)",
              fontFamily: "Gill Sans, sans-serif",
              "&.Mui-selected": { color: "var(--primary-text-dark)" },
            }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};
