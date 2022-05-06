import { AppBar, Typography } from "@mui/material";
import React from "react";
import { Toolbar, Badge } from "@mui/material";
import "../index.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Ezzy from "../assets/ezzy.JPG";

const drawerWidth = 200;
const ToolBar = () => {
  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          style={{ background: "white", color: "black" }}
          className='toolbar'
        >
          <Typography
            variant='h2'
            style={{ fontSize: "30px", fontWeight: "bold", color: "darkblue" }}
          >
            Ezekiel
          </Typography>

          <IconButton>
            <Badge
              color='secondary'
              badgeContent={4}
              sx={{ marginRight: "1rem" }}
            >
              <NotificationsNoneIcon />
            </Badge>
            <Badge
              color='secondary'
              badgeContent={4}
              sx={{ marginRight: "1rem" }}
            >
              <LanguageIcon />
            </Badge>
            <Badge
              color='secondary'
              badgeContent={4}
              sx={{ marginRight: "1rem" }}
            >
              <SettingsIcon />
            </Badge>
            <Avatar src={Ezzy} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default ToolBar;
