import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function TabsPanel() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h3>Title Lorem ipsum 1</h3>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          rem fuga nesciunt deserunt, iste eveniet. Eius aperiam aspernatur
          provident accusamus voluptas cum sunt suscipit inventore, beatae
          mollitia nesciunt illo ex? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus rem fuga nesciunt deserunt, iste eveniet.
          Eius aperiam aspernatur provident accusamus voluptas cum sunt suscipit
          inventore, beatae mollitia nesciunt illo ex? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Accusamus rem fuga nesciunt
          deserunt, iste eveniet. Eius aperiam aspernatur provident accusamus
          voluptas cum sunt suscipit inventore, beatae mollitia nesciunt illo
          ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus rem fuga nesciunt deserunt, iste eveniet. Eius aperiam
          aspernatur provident accusamus voluptas cum sunt suscipit inventore,
          beatae mollitia nesciunt illo ex?
        </h5>
        <h6>
          <span>foot 1</span>
          <span className="foot-2">foot 2</span>
        </h6>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h3>Title Lorem ipsum 2</h3>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          rem fuga nesciunt deserunt, iste eveniet. Eius aperiam aspernatur
          provident accusamus voluptas cum sunt suscipit inventore, beatae
          mollitia nesciunt illo ex? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus rem fuga nesciunt deserunt, iste eveniet.
          Eius aperiam aspernatur provident accusamus voluptas cum sunt suscipit
          inventore, beatae mollitia nesciunt illo ex? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Accusamus rem fuga nesciunt
          deserunt, iste eveniet. Eius aperiam aspernatur provident accusamus
          voluptas cum sunt suscipit inventore, beatae mollitia nesciunt illo
          ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus rem fuga nesciunt deserunt, iste eveniet. Eius aperiam
          aspernatur provident accusamus voluptas cum sunt suscipit inventore,
          beatae mollitia nesciunt illo ex?
        </h5>
        <h6>
          <span>foot 1</span>
          <span className="foot-2">foot 2</span>
        </h6>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h3>Title Lorem ipsum 3</h3>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          rem fuga nesciunt deserunt, iste eveniet. Eius aperiam aspernatur
          provident accusamus voluptas cum sunt suscipit inventore, beatae
          mollitia nesciunt illo ex? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusamus rem fuga nesciunt deserunt, iste eveniet.
          Eius aperiam aspernatur provident accusamus voluptas cum sunt suscipit
          inventore, beatae mollitia nesciunt illo ex? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Accusamus rem fuga nesciunt
          deserunt, iste eveniet. Eius aperiam aspernatur provident accusamus
          voluptas cum sunt suscipit inventore, beatae mollitia nesciunt illo
          ex? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus rem fuga nesciunt deserunt, iste eveniet. Eius aperiam
          aspernatur provident accusamus voluptas cum sunt suscipit inventore,
          beatae mollitia nesciunt illo ex?
        </h5>
        <h6>
          <span>foot 1</span>
          <span className="foot-2">foot 2</span>
        </h6>
      </TabPanel>
    </Box>
  );
}
