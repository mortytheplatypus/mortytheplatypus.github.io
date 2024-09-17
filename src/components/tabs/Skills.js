import React from 'react';
import { Grid } from "@mui/material";
import Construction from "../Construction";

function Skills() {
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

        <h2>Do I really have any skill? Does anyone?</h2>
      </Grid>
    </>
  );
}

export default Skills;
