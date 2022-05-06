import { Grid, Typography, Box, Toolbar } from "@mui/material";
import React from "react";
import "./main.css";
import mainData from "./main";
import Charts from "./chart";
const drawerWidth = 240;
const Main = () => {
  return (
    // <section className='main'>
    <Box
      component='main'
      sx={{
        marginLeft: "32px",
        padding: { xs: "0 2rem 0 2rem" },
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
      <Charts />
    </Box>
    // </section>
  );
};

export default Main;
