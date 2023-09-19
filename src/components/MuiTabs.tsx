import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";

interface MuiTabsProps {
  selectedTab: string;
  onTabChange: (event: React.SyntheticEvent, newValue: string) => void;
}

export const MuiTabs: React.FC<MuiTabsProps> = ({
  selectedTab,
  onTabChange,
}) => {
  return (
    <TabContext value={selectedTab}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList
          onChange={onTabChange}
          aria-label="tab for algorythm choice"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab
            label={<Typography variant="h6">Linear Regression</Typography>}
            value="1"
          />
          <Tab
            label={<Typography variant="h6">Gradient Descent</Typography>}
            value="2"
          />
        </TabList>
      </Box>
      <TabPanel value="1">{/* Content for Linear Regression Tab */}</TabPanel>
      <TabPanel value="2">{/* Content for Gradient Descent Tab */}</TabPanel>
    </TabContext>
  );
};

export default MuiTabs;
