import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Main from './components/Main';
import { Padding } from '@mui/icons-material';

function App() {
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div style = {{height: "100vh", width: "100vw"}}>
      {
        loading ? <Loader /> : <Main />
      } 
    </div>
  );
}

export default App;
