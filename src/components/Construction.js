import React from "react";
import { Box } from "@mui/material";

function Academics() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          mt: 2,
          mb: 2,
        }}
      >
        <img
          src="/images/customer.png"
          alt="Academics"
          width={250}
          height={250}
        />
      </Box>
    </>
  );
}

export default Academics;
