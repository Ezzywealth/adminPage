import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Input,
  InputLabel,
} from "@mui/material";
import "./newProduct.css";

const drawerWidth = 240;
const NewProduct = () => {
  const active = ["yes", "no"];
  const [option, setOption] = useState("yes");
  const handleChange = (e) => {
    setOption(e.target.value);
  };
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
        <Typography variant='h4' sx={{ fontWeight: "900" }}>
          New Product
        </Typography>
        <form className='form2'>
          <InputLabel htmlFor='image'>
            <Typography> Image</Typography>
            <Input type='file' id='image' style={{ textDecoration: "none" }} />
          </InputLabel>
          <TextField margin='dense' id='Name' label='Name' size='small' />
          <TextField margin='dense' id='stock' label='Stock' size='small' />

          <TextField
            onChange={handleChange}
            margin='dense'
            value={option}
            select
            label='active'
            id=''
            size='small'
          >
            {active.map((a) => (
              <MenuItem key={a} value={a}>
                {a}
              </MenuItem>
            ))}
          </TextField>
        </form>
        <Button sx={{ backgroundColor: "darkblue", width: "7rem" }}>
          create
        </Button>
      </Box>
    </>
  );
};

export default NewProduct;
