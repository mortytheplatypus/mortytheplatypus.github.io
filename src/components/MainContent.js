import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, Container, Box } from '@mui/material';
import Home from './Home';
import Academics from './Academics';
import Skills from './Skills';
import Projects from './Projects';
import Hobbies from './Hobbies';
import Others from './Others';

function MainContent() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/academics':
        setValue(1);
        break;
      case '/skills':
        setValue(2);
        break;
      case '/projects':
        setValue(3);
        break;
      case '/hobbies':
        setValue(4);
        break;
      case '/others':
        setValue(5);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 2,
          mt: 2,
          bgcolor: '#E2E2B6',
          borderRadius: 1,
          boxShadow: 1,
          fontFamily: 'Gill Sans, sans-serif',
        }}
      >
        <AppBar position="static" sx={{ width: '100%', borderRadius: 1, mb: 2, bgcolor: "#021526" }}>
          <Toolbar sx={{ justifyContent: 'center' }}>
            <Tabs value={value} onChange={handleChange} variant="fullWidth" TabIndicatorProps={{ style: { backgroundColor: '#E2E2B6' } }}>
              <Tab
                label="Home"
                component={Link}
                to="/"
                sx={{ fontWeight: value === 0 ? 'bold' : 'normal', color: '#E2E2B6', '&.Mui-selected': { color: '#F2F2C6' } }}
              />
              <Tab
                label="Academics"
                component={Link}
                to="/academics"
                sx={{ fontWeight: value === 1 ? 'bold' : 'normal', color: '#E2E2B6', '&.Mui-selected': { color: '#F2F2C6' } }}
              />
              <Tab
                label="Skills"
                component={Link}
                to="/skills"
                sx={{ fontWeight: value === 2 ? 'bold' : 'normal', color: '#E2E2B6', '&.Mui-selected': { color: '#F2F2C6' } }}
              />
              <Tab
                label="Projects"
                component={Link}
                to="/projects"
                sx={{ fontWeight: value === 3 ? 'bold' : 'normal', color: '#E2E2B6', '&.Mui-selected': { color: '#F2F2C6' } }}
              />
              <Tab
                label="Hobbies"
                component={Link}
                to="/hobbies"
                sx={{ fontWeight: value === 4 ? 'bold' : 'normal', color: '#E2E2B6', '&.Mui-selected': { color: '#F2F2C6' } }}
              />
              <Tab
                label="Others"
                component={Link}
                to="/others"
                sx={{ fontWeight: value === 5 ? 'bold' : 'normal', color: '#E2E2B6', '&.Mui-selected': { color: '#F2F2C6' } }}
              />
            </Tabs>
          </Toolbar>
        </AppBar>
        
        <Box sx={{ width: '100%', mt: 2 }}>
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
    </Container>
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
