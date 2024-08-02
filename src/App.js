import { Container, Grid } from '@mui/material';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <Container style={{  }}>
      <Grid container spacing={2.5} sx={{ display: 'flex' }}>
        <Grid item xs={12} md={4} sx={{ p: 2.5 }}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={8} sx={{ p: 2.5}}>
          <MainContent />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
