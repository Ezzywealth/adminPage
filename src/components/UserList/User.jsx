import {
  Typography,
  Button,
  Grid,
  Box,
  Avatar,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import "./user.css";
import Me from "../../assets/Me.JPG";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const User = () => {
  return (
    <>
      <Box
        component='main'
        sx={{
          marginLeft: "32px",

          padding: { xs: "0 1rem 0 0" },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <div className='user'>
          <Typography variant='h4' style={{ fontWeight: "900" }}>
            Edit User
          </Typography>
          <Link to='/newUser'>
            <Button style={{ background: "green", color: "#fff" }}>
              create
            </Button>
          </Link>
        </div>
        <Grid
          container
          display='flex'
          justifyContent={{ md: "space-between" }}
          padding={{ sm: "20px" }}
        >
          <Grid
            elevation
            item
            xs={12}
            sm={12}
            md={4}
            marginRight={{ sm: "0.3rem" }}
            style={{
              boxShadow: "-1px -1px 5px 9px rgba(242,235,235,0.75)",
            }}
          >
            <div className='edit__header'>
              <Avatar src={Me} className='img' />
              <div>
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: "900",
                    fontSize: "1rem",
                  }}
                >
                  Snow Jon
                </Typography>
                <Typography>Software Engineer</Typography>
              </div>
            </div>

            <div className='body'>
              <Typography variant='header2'>Account Details</Typography>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary='jonsnow65' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CalendarTodayIcon />
                  </ListItemIcon>
                  <ListItemText primary='11.05.2022' />
                </ListItem>
              </List>
              <Typography variant='header2'>Contact Details</Typography>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <PhoneAndroidIcon />
                  </ListItemIcon>
                  <ListItemText primary='jonsnow65' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary='11.05.2022' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationSearchingIcon />
                  </ListItemIcon>
                  <ListItemText primary='Delta || Nigeria' />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid
            display='flex'
            justifyContent='space-between'
            item
            xs={12}
            sm={12}
            md={7.7}
            style={{
              boxShadow: "-1px -1px 5px 9px rgba(242,235,235,0.75)",
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  fontWeight: "700",
                  fontSize: "1.5rem",
                }}
              >
                Edit
              </Typography>
              <form className='form'>
                <TextField
                  label='Username'
                  id='username'
                  variant='standard'
                  margin='dense'
                />

                <TextField
                  label='Full Name'
                  variant='standard'
                  margin='dense'
                />

                <TextField label='Email' variant='standard' margin='dense' />

                <TextField label='Phone' variant='standard' margin='dense' />

                <TextField label='Address' variant='standard' margin='dense' />
              </form>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              display='flex'
              flexDirection='column'
              justifyContent='space-around'
              padding={{ xs: "1rem" }}
            >
              <div className='img__icon'>
                <img src={Me} alt='Ezzy' width='70%' className='imgMe' />
                <PublishIcon />
              </div>

              <Button
                size='small'
                sx={{
                  borderRadius: "5px",
                  border: "none",
                  padding: "5px",
                  cursor: "pointer",
                  backgroundColor: "darkblue",
                  color: "white",
                  scale: 0.8,
                  ":hover": {
                    color: "darkblue",
                  },
                }}
              >
                update
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default User;
