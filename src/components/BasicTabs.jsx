import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import SimpleAccordion from './SimpleAccordion';
import Chips from './Chips';

import Stack from '@mui/material/Stack';
import MediaCard from './MediaCard';
import About from './About';
import SkillsContent from './SkillsContent';


function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
        sx={{padding:"0 25px"}}
        value={value} 
        onChange={handleChange} 
        aria-label="basic tabs example"
        variant="scrollable"
        scrollButtons="auto"
        >
          <Tab label="Skills" {...a11yProps(0)} />
          <Tab label="Why me?" {...a11yProps(1)} />
          <Tab label="Social" {...a11yProps(1)} />
          <Tab sx={{display:"none"}} label="Projects" {...a11yProps(2)} />
        </Tabs>
      </Box>


      <TabPanel value={value} index={0}>

        <SkillsContent/>

      
      
      </TabPanel>



      <TabPanel value={value} index={1}>

        <About></About>

      </TabPanel>

      <TabPanel value={value} index={2}>

        <div className="flex flex-wrap">

          <a href="https://twitter.com/kaisan_abdullah" target="_blank" rel="noopener noreferrer">
            <Chips variant="outlined" name="Twitter" img="https://img.icons8.com/color/48/000000/twitter--v1.png" />
          </a>

          <Chips variant="outlined" name="Linkend" img="https://img.icons8.com/color/48/000000/linkedin.png" />
          
          <a href="https://github.com/abdullahalkaisan" target="_blank" rel="noopener noreferrer">
            <Chips variant="outlined" name="Github" img="https://img.icons8.com/ios-glyphs/480/000000/github.png" />
          </a>

          <Chips variant="outlined" name="Youtube" img="https://img.icons8.com/fluency/48/000000/youtube-play.png" />
          <Chips variant="outlined" name="Upwork" img="https://www.svgrepo.com/show/331630/upwork.svg" />
        </div>

      </TabPanel>



      {/* <MediaCard title="Admin dashboard" discription="#UX UI design" img="https://www.opendrive.com/s/MjdfMTY5ODIxNDRfQzdCSmM?preview=1&folder_id=MjdfMTMxNDg4OF9PSGZYTw" /> */}


    </Box>

  );
}