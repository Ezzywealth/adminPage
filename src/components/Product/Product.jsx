import {
  Typography,
  Box,
  Grid,
  Avatar,
  TextField,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import Iwatch from "../../assets/iwatch.jpg";
import "./product.css";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";
const drawerWidth = 240;
const Product = () => {
  const [inStock, setInStock] = useState("yes");
  const [isActive, setIsActive] = useState("yes");

  const active = ["yes", "no"];
  const Stock = ["yes", "no"];
  const ProductData = [
    {
      name: "Jan",
      Sales: 4000,
    },
    {
      name: "Feb",
      Sales: 3700,
    },
    {
      name: "Mar",
      Sales: 5000,
    },
    {
      name: "Apr",
      Sales: 4100,
    },
  ];

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
        <div className='header'>
          <Typography>Product</Typography>
          <Link to='/newProduct'>
            <Button variant='contained'>Create</Button>
          </Link>
        </div>

        <Grid
          container
          display={{ xs: "block", md: "flex" }}
          justifyContent='space-between'
          paddingRight={{ xs: "1rem", md: "2rem", lg: "1rem" }}
        >
          <Grid
            item
            xs={12}
            md={6.5}
            lg={6.5}
            style={{
              boxShadow: "-1px -1px 5px 9px rgba(242,235,235,0.75)",
              padding: "2rem",
            }}
          >
            <Typography>Sales Performance</Typography>
            <ResponsiveContainer width='95%' aspect={4 / 1} debounce={1}>
              <LineChart data={ProductData} title='Sales Performance'>
                <XAxis dataKey='name' />
                {/* <Tooltip /> */}
                <Line type='monotone' dataKey='Sales' stroke='#8884d8' />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            lg={5}
            style={{
              boxShadow: "-1px -1px 5px 9px rgba(242,235,235,0.75)",
              padding: "2rem",
            }}
          >
            <div className='info' style={{ width: "40%" }}>
              <Avatar src={Iwatch} className='avatar' />
              <Typography sx={{ fontWeight: "700" }}>Apple Iwatch</Typography>
            </div>
            <div className='info'>
              <Typography>id:</Typography>
              <Typography>234</Typography>
            </div>
            <div className='info'>
              <Typography>Sales:</Typography>
              <Typography>65</Typography>
            </div>
            <div className='info'>
              <Typography>active:</Typography>
              <Typography>Yes</Typography>
            </div>
            <div className='info'>
              <Typography>in stock:</Typography>
              <Typography>No</Typography>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          display={{ xs: "block", md: "flex" }}
          justifyContent='space-between'
          style={{
            boxShadow: "-1px -1px 5px 9px rgba(242,235,235,0.75)",
            padding: "2rem",
            marginTop: "2rem",
            marginRight: "3rem",
          }}
        >
          <Grid item display='block' xs={12} md={5}>
            <Typography>Product Name</Typography>
            <form className='form'>
              <TextField variant='standard' placeholder='Apple Iwatch' />
              <InputLabel htmlFor='instock'>In Stock</InputLabel>
              <TextField
                size='small'
                select
                value={inStock}
                id='instock'
                onChange={(e) => setInStock(e.target.value)}
              >
                {Stock.map((st, index) => (
                  <MenuItem key={index} value={st}>
                    {st}
                  </MenuItem>
                ))}
              </TextField>
              <InputLabel htmlFor='active'>Active</InputLabel>
              <TextField
                size='small'
                select
                value={isActive}
                id='active'
                onChange={(e) => setIsActive(e.target.value)}
              >
                {active.map((ac, index) => (
                  <MenuItem key={index} value={ac}>
                    {ac}
                  </MenuItem>
                ))}
              </TextField>
            </form>
          </Grid>
          <Grid item xs={12} md={5} display='flex' flexDirection='column'>
            <div className='img__icon'>
              <img src={Iwatch} alt='Ezzy' width='70%' className='imgMe' />
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
                width: "8rem",

                ":hover": {
                  color: "darkblue",
                },
              }}
            >
              update
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Product;
