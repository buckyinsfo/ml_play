import React, { FC, useState } from "react";
import { Box, Container, useMediaQuery } from "@mui/material";

import Ok2Delete from "./components/MuiAppBarResponsive";
import Linear from "./components/LinearRegression";
import Gradient from "./components/GradientDescent";
import CanvasComponent from "./components/CanvasComponent";

import "./App.css";

interface IAppProps {
  appTitle: string;
  headerText?: string;
}

const App: FC<IAppProps> = ({ appTitle }): JSX.Element => {
  const isXSmallScreen = useMediaQuery("(max-width: 600px)");
  const isSmallScreen = useMediaQuery(
    "(min-width: 601px) and (max-width: 960px)"
  );
  const isMediumScreen = useMediaQuery(
    "(min-width: 961px) and (max-width: 1280px)"
  );
  const isLargeScreen = useMediaQuery(
    "(min-width: 1281px) and (max-width: 1920px)"
  );
  const isXLargeScreen = useMediaQuery("(min-width: 1921px)");

  const [selectedTab, setSelectedTab] = useState<string>("Linear Regression"); // Initialize the selected tab

  // const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
  const handleTabChange = (newValue: string) => {
    setSelectedTab(newValue); // Update the selected tab when a tab is clicked
  };

  return (
    <Container
      maxWidth={
        isXLargeScreen
          ? "xl"
          : isLargeScreen
          ? "lg"
          : isMediumScreen
          ? "md"
          : isSmallScreen
          ? "sm"
          : "xs"
      }
      sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Box sx={{ bgcolor: "secondary.main", height: "10vh" }}>
        <Ok2Delete selectedTab={selectedTab} onTabChange={handleTabChange} />
      </Box>

      <Box sx={{ bgcolor: "secondary.main", height: "85vh" }}>
        <React.Fragment>
          {/* Render content components based on the selected tab */}
          {selectedTab === "Linear Regression" ? <Linear /> : null}
          {selectedTab === "Gradient Decent" ? <Gradient /> : null}
          {selectedTab === "Canvas Component" ? <CanvasComponent /> : null}
        </React.Fragment>
      </Box>

      <Box sx={{ bgcolor: "secondary.main", height: "5vh" }}>
        <div className="version">React version: {React.version}</div>
      </Box>
    </Container>
  );
};

export default App;
