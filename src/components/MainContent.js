import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab, Container, Box } from "@mui/material";
import Home from "./tabs/Home";
import Academics from "./tabs/Academics";
import Skills from "./tabs/Skills";
import Projects from "./tabs/Projects";
import Hobbies from "./tabs/Hobbies";
import Others from "./tabs/Others";

function MainContent() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/academics":
        setValue(1);
        break;
      case "/skills":
        setValue(2);
        break;
      case "/projects":
        setValue(3);
        break;
      case "/hobbies":
        setValue(4);
        break;
      case "/others":
        setValue(5);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const bgColorMain = "#EAEADD";
  const appBarColor = "#021526";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        mt: 2,
        bgcolor: bgColorMain,
        borderRadius: 1,
        boxShadow: 1,
        fontFamily: "Gill Sans, sans-serif",
        height: "90vh",
      }}
    >
      <AppBar
        position="static"
        sx={{ width: "100%", borderRadius: 1, mb: 2, bgcolor: appBarColor }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            TabIndicatorProps={{ style: { backgroundColor: bgColorMain } }}
          >
            <Tab
              label="Home"
              component={Link}
              to="/"
              sx={{
                fontWeight: value === 0 ? "bold" : "normal",
                color: bgColorMain,
                "&.Mui-selected": { color: bgColorMain },
              }}
            />
            <Tab
              label="Academics"
              component={Link}
              to="/academics"
              sx={{
                fontWeight: value === 1 ? "bold" : "normal",
                color: bgColorMain,
                "&.Mui-selected": { color: bgColorMain },
              }}
            />
            <Tab
              label="Skills"
              component={Link}
              to="/skills"
              sx={{
                fontWeight: value === 2 ? "bold" : "normal",
                color: bgColorMain,
                "&.Mui-selected": { color: bgColorMain },
              }}
            />
            <Tab
              label="Projects"
              component={Link}
              to="/projects"
              sx={{
                fontWeight: value === 3 ? "bold" : "normal",
                color: bgColorMain,
                "&.Mui-selected": { color: bgColorMain },
              }}
            />
            <Tab
              label="Hobbies"
              component={Link}
              to="/hobbies"
              sx={{
                fontWeight: value === 4 ? "bold" : "normal",
                color: bgColorMain,
                "&.Mui-selected": { color: bgColorMain },
              }}
            />
            <Tab
              label="Others"
              component={Link}
              to="/others"
              sx={{
                fontWeight: value === 5 ? "bold" : "normal",
                color: bgColorMain,
                "&.Mui-selected": { color: bgColorMain },
              }}
            />
          </Tabs>
        </Toolbar>
      </AppBar>

      <Box sx={{ width: "100%", mt: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/others" element={<Others />} />
        </Routes>
      </Box>
    </Box>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default AppWithRouter;
