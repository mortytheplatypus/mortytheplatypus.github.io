import React from "react";
import { Grid } from "@mui/material";
import Construction from "../Construction";

function Academics() {
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

        <h2>I will surely finish this page once I have enough time :)</h2>
      </Grid>
    </>
  );
}

export default Academics;
