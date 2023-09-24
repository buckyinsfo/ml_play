import React from "react";
import Container from "@mui/material/Container";

const CanvasComponent: React.FC = () => {
  return (
    <Container maxWidth="xl">
      {/* Other content */}
      <div style={{ position: "relative" }}>
        <canvas
          id="myCanvas"
          style={{ width: "100%", height: "100%", border: "1px solid #000" }}
        ></canvas>
      </div>
    </Container>
  );
};

export default CanvasComponent;
