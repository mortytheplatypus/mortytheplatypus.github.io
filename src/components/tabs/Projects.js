import React from 'react';
import { Grid } from "@mui/material";
import Construction from "../Construction";

function Projects() {
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Construction />

        <h2>Oh, wait! I forgot to finish most of them. :)</h2>
      </Grid>

      {/* Recent Projects */}
      {/* <Typography variant="h5" component="h2" gutterBottom>
        Recent Projects
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ backgroundColor: '#f0f0d8', p: 2, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>Project Name 1</Typography>
            <Typography variant="body2" paragraph>
              Description of the project, highlighting the technologies used and its impact.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ backgroundColor: '#f0f0d8', p: 2, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>Project Name 2</Typography>
            <Typography variant="body2" paragraph>
              Brief overview with a focus on your contribution or challenges solved.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ backgroundColor: '#f0f0d8', p: 2, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>Project Name 3</Typography>
            <Typography variant="body2" paragraph>
              Mention the tools and skills you used, and why the project was important for your growth.
            </Typography>
          </Box>
        </Grid>
      </Grid> */}
    </>
  );
}

export default Projects;
