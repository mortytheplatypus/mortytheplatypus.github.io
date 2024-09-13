import React from "react";
import { HashLoader } from "react-spinners";

function Loader() {
  return (
    <HashLoader
        color="#161f30"
        size={75}
        speedMultiplier={1.5}
        style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
    />
  );
}

export default Loader;