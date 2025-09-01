import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";

export const TabContainer = () => {
  const [value, setValue] = React.useState(0);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/resume":
        setValue(5);
        break;
      case "/career":
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

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        width: { xs: "90%", sm: "80%" },
        borderRadius: 1,
        bgcolor: "var(--primary-bg)"
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{ style: { display: "none" } }}
        >
        <Tab
          label="Resume"
          component={Link}
          to="/resume"
          sx={{
            fontWeight: value === 5 ? "bold" : "normal",
            fontSize: value === 5 ? "0.95rem" : "0.8rem",
            color: "var(--primary-text)",
            fontFamily: "Gill Sans, sans-serif",
            "&.Mui-selected": { color: "var(--primary-text-dark)" },
            "&:hover": {
              backgroundColor: "#EAEAE2",
              borderRadius: "4px",
            },
          }}
        />
          <Tab
            label="Career"
            component={Link}
            to="/career"
            sx={{
              fontWeight: value === 1 ? "bold" : "normal",
              fontSize: value === 1 ? "0.95rem" : "0.8rem",
              color: "var(--primary-text)",
              fontFamily: "Gill Sans, sans-serif",
              "&.Mui-selected": { color: "var(--primary-text-dark)" },
              "&:hover": {
                backgroundColor: "#EAEAE2",
                borderRadius: "4px",
              },
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
              "&:hover": {
                backgroundColor: "#EAEAE2",
                borderRadius: "4px",
              },
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
              "&:hover": {
                backgroundColor: "#EAEAE2",
                borderRadius: "4px",
              },
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
              "&:hover": {
                backgroundColor: "#EAEAE2",
                borderRadius: "4px",
              },
            }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};
