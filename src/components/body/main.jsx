import {
  Grid,
  Typography,
  Box,
  Toolbar,
  Avatar,
  IconButton,
} from "@mui/material";
import React from "react";
import "./main.css";
import mainData from "./main";
import Charts from "./chart/chart";
import { Visibility } from "@mui/icons-material";
import BasicTable from "./table";
import Me from "../../assets/Me.JPG";
const drawerWidth = 240;
const Main = ({ Data }) => {
  return (
    // <section className='main'>
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
        <Grid
          container
          spacing={4}
          display='flex'
          justifyContent='space-around'
          style={{ marginBottom: "1rem" }}
        >
          {mainData.map((m, index) => (
            <Grid
              item
              key={index}
              display='flex'
              flexDirection='column'
              alignItems='center'
              xs={12}
              sm={12}
              md={3}
              lg={3}
              style={{
                boxShadow: "-1px -1px 5px 9px rgba(242,235,235,0.75)",
                padding: "2rem",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bolder",
                  fontSize: "2rem",
                }}
              >
                {m.name}
              </Typography>
              <Typography
                style={{
                  fontSize: "1rem",
                  color: "primary",
                }}
              >
                {m.value}
                {m.pL}
                {m.icon}
              </Typography>
              <Typography
                style={{
                  fontSize: "1rem",
                }}
              >
                {m.info}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant='h5'
          style={{
            display: "flex",
            justifyContent: "center",
            color: "secondary",
            fontWeight: "bold",
          }}
        >
          User Analytics
        </Typography>
        <Charts data={Data} />
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            style={{
              marginRight: "1rem",
              border: "0.5px solid #fff",
              boxShadow: "1px 0px 5px 6px rgba(247,238,238,0.99)",
              marginTop: "1rem",
            }}
          >
            <Typography
              variant='h6'
              style={{ textAlign: "center", fontWeight: "bolder" }}
            >
              New Join Members
            </Typography>
            <div className='new__members'>
              <Avatar alt='ezzy' src={Me} />
              <div className='name'>
                <Typography sx={{ fontWeight: "700" }}>Anna Kelly</Typography>
                <Typography>Software Engineer</Typography>
              </div>
              <IconButton>
                <Visibility />
                <Typography>Display</Typography>
              </IconButton>
            </div>
            <div className='new__members'>
              <Avatar alt='ezzy' src={Me} />
              <div className='name'>
                <Typography sx={{ fontWeight: "700" }}>Anna Kelly</Typography>
                <Typography>Software Engineer</Typography>
              </div>
              <IconButton>
                <Visibility />
                <Typography>Display</Typography>
              </IconButton>
            </div>
            <div className='new__members'>
              <Avatar alt='ezzy' src={Me} />
              <div className='name'>
                <Typography sx={{ fontWeight: "700" }}>Anna Kelly</Typography>
                <Typography>Software Engineer</Typography>
              </div>
              <IconButton>
                <Visibility />
                <Typography>Display</Typography>
              </IconButton>
            </div>
            <div className='new__members'>
              <Avatar alt='ezzy' src={Me} />
              <div className='name'>
                <Typography sx={{ fontWeight: "700" }}>Anna Kelly</Typography>
                <Typography>Software Engineer</Typography>
              </div>
              <IconButton>
                <Visibility />
                <Typography>Display</Typography>
              </IconButton>
            </div>
            <div className='new__members'>
              <Avatar alt='ezzy' src={Me} />
              <div className='name'>
                <Typography sx={{ fontWeight: "700" }}>Anna Kelly</Typography>
                <Typography>Software Engineer</Typography>
              </div>
              <IconButton>
                <Visibility />
                <Typography sx={{ fontWeight: "700" }}>Display</Typography>
              </IconButton>
            </div>
          </Grid>
          <Grid
            xs={12}
            md={7}
            item
            style={{
              marginRight: "1rem",
              border: "0.5px solid #fff",
              boxShadow: "1px 0px 5px 6px rgba(247,238,238,0.99)",
            }}
          >
            <Typography
              variant='h6'
              style={{
                textAlign: "center",
                fontWeight: "bolder",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            >
              Latest Transactions
            </Typography>
            <BasicTable />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Main;
