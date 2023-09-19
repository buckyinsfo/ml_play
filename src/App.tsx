import React, { FC, useState } from "react";
import { AppBar, Container, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

import MuiTabs from "./components/MuiTabs";
import Linear from "./components/LinearRegression";
import Gradient from "./components/GradientDescent";

interface IAppProps {
  appTitle: string;
  headerText?: string;
}

const App: FC<IAppProps> = ({ appTitle }): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<string>("1"); // Initialize the selected tab

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue); // Update the selected tab when a tab is clicked
  };

  return (
    <Container maxWidth="sm">
      <AppBar>
        <PhotoCamera
          sx={{
            mt: (theme) => theme.spacing(2),
            ":hover": {
              bgcolor: "cyan",
            },
          }}
        />
        <Typography variant="h6">{appTitle}</Typography>
        <MuiTabs selectedTab={selectedTab} onTabChange={handleTabChange} />
      </AppBar>

      <React.Fragment>
        {/* Render content components based on the selected tab */}
        {selectedTab === "1" ? <Linear /> : null}
        {selectedTab === "2" ? <Gradient /> : null}
      </React.Fragment>

      <div className="version">React version: {React.version}</div>
    </Container>
  );
};

export default App;
