import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';
// import './index.css';
import App from './App';

const theme = createTheme({
    typography: {
      fontFamily: 'Gill Sans, sans-serif',
    },
    palette: {
      text: {
        primary: '#021526',
      },
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);


