import React from 'react';
import { Grid } from "@mui/material";
import Construction from "../Construction";

function Others() {
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

        <h2>Umm, I seem to forget what else is in my bag! :( </h2>
      </Grid>
    </>
  );
}

export default Others;
