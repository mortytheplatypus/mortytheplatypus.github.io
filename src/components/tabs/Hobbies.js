import React from "react";
import { Grid } from "@mui/material";
import Construction from "../Construction";

function Hobbies() {
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

        <h2>I can't wait to blabber about my silly hobbies ^_^</h2>
      </Grid>
    </>
  );
}

export default Hobbies;
