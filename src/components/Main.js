import { Container, Grid } from '@mui/material';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function Main() {

  return (
    <Container disableGutters={true} maxWidth={false} sx={{ height: '100%', width: '100%', padding: 0 }}>
      <Grid container sx={{ display: 'flex', height: '100%', width: '100%' }}>
        <Grid item xs={12} sm={6} md={4} lg={3.5} sx={{ pl: { xs: 1, sm: 2, md: 2.5 }, pr: { xs: 1, sm: 2, md: 1.5 } }}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={8.5} sx={{ pl: { xs: 1, sm: 2, md: 1.5 }, pr: { xs: 1, sm: 2, md: 2.5 } }}>
          <MainContent />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
