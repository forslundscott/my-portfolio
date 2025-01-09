import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Tooltip,Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import AboutIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SkillsIcon from "@mui/icons-material/Code";
import CommunityIcon from "@mui/icons-material/VolunteerActivism";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ceff00', // Custom primary color
      },
      secondary: {
        main: '#576261', // Custom secondary color
      },
    },
  });
const FloatingNav = ({ onClick }) => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen(!open);
    };
  
    return (
        <ThemeProvider theme={theme}>
      <div className="floatingNav" style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        {/* Main Floating Action Button */}
        <Fab color={open ?"primary":"secondary"} onClick={handleToggle}>
          {open ? <CloseIcon /> : <AddIcon sx={{ color: "#ceff00" }}/>}
        </Fab>
  
        {/* Additional Buttons */}
        {open && (
          <div style={{ position: "absolute", bottom: "80px", right: "0px" }}>
            <Link to="/">
            <Tooltip title="Home" placement="left">
            <Fab
              size="small"
              style={{ marginBottom: "10px" }}
              color="primary"
            >
              <HomeIcon />
            </Fab>
            </Tooltip>
            </Link>
            <Link to="/about">
            <Tooltip title="About Me" placement="left">
            <Fab
              size="small"
              style={{ marginBottom: "10px" }}
              color="primary"
            >
              <AboutIcon />
            </Fab>
            </Tooltip>
            </Link>
            <Link to="/workhistory">
            <Tooltip title="Work History" placement="left">
            <Fab
              
              size="small"
              style={{ marginBottom: "10px" }}
              color="primary"
            >
              <WorkHistoryIcon />
            </Fab>
            </Tooltip>
            </Link>
            <Link to="/skills">
            <Tooltip title="Skills" placement="left">
            <Fab
              
              size="small"
              style={{ marginBottom: "10px" }}
              color="primary"
            //   className="voltButton"
            >
              <SkillsIcon />
            </Fab>
            </Tooltip>
            </Link>
            <Link to="/achievements">
            <Tooltip title="Achievements" placement="left">
            <Fab
              
              size="small"
              style={{ marginBottom: "10px" }}
              color="primary"
            //   className="voltButton"
            >
              <EmojiEventsIcon />
            </Fab>
            </Tooltip>
            </Link>
            <Link to="/School">
            <Tooltip title="School/Certs" placement="left">
            <Fab
              
              size="small"
              style={{ marginBottom: "10px" }}
              color="primary"
            //   className="voltButton"
            >
              <SchoolIcon />
            </Fab>
            </Tooltip>
            </Link>
            <Link to="/community">
            <Tooltip title="Community" placement="left">
            <Fab
              
              size="small"
              style={{ marginBottom: "10px" }}
              color="primary"
            //   className="voltButton"
            >
              <CommunityIcon />
            </Fab>
            </Tooltip>
            </Link>
            <Link to="https://github.com/forslundscott/">
            <Tooltip title="GitHub" placement="left">
            <Fab
              size="small"
              style={{ marginBottom: "10px" }}
              color="primary"
            >
              <GitHubIcon />
            </Fab>
            </Tooltip>
            </Link>
            <Link to="https://www.linkedin.com/in/scott-forslund-cpa/">
            <Tooltip title="LinkedIn" placement="left">
            <Fab
              size="small"
              style={{ marginBottom: "10px" }}
              color="primary"
            >
              <LinkedInIcon />
            </Fab>
            </Tooltip>
            </Link>
            
          </div>
        )}
      </div>
      </ThemeProvider>
    );
};

export default FloatingNav;