import React from "react";
import Dashboard from "../components/drawer/dashboard";
import Notification from "../components/drawer/Notifications";
import { Divider, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import quickMenu from "../components/drawer/quickMenu";
import Staff from "../components/drawer/staff";
import { Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 200;
const SideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            marginLeft: "1rem",
          },
        }}
        open
      >
        <Typography>Dashboard</Typography>
        <List>
          {Dashboard.map((dash, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                if (dash.name === "Home") navigate("/");
                if (dash.name === "analytics") navigate("/analytics");
                if (dash.name === "sales") navigate("/sales");
              }}
            >
              <ListItemIcon>{dash.icon}</ListItemIcon>
              <ListItemText primary={dash.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography>Quick Menu</Typography>
        <List>
          {quickMenu.map((qM, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                if (qM.name === "Users") navigate("/users");
                if (qM.name === "Products") navigate("/products");
                if (qM.name === "Transactions") navigate("/transactions");
                if (qM.name === "Reports") navigate("/reports");
              }}
            >
              <ListItemIcon>{qM.icon}</ListItemIcon>
              <ListItemText primary={qM.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography>Notifications</Typography>
        <List>
          {Notification.map((noti, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{noti.icon}</ListItemIcon>
              <ListItemText primary={noti.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography>Staff</Typography>
        <List>
          {Staff.map((st, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{st.icon}</ListItemIcon>
              <ListItemText primary={st.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default SideBar;
