import React, { useState } from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import "./newUser.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const drawerWidth = 240;
const NewUser = () => {
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
        <Typography>New User</Typography>
        <form className='form'>
          <TextField margin='dense' label='username' id='username' />
          <TextField margin='dense' label='fullName' id='fullName' />
          <TextField margin='dense' label='email' id='email' />
          <TextField margin='dense' label='password' id='password' />
          <TextField margin='dense' type='number' label='phone' id='phone' />
          <TextField margin='dense' label='address' id='address' />
          <FormControl>
            <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='female'
              name='radio-buttons-group'
              row
            >
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
              />
              <FormControlLabel value='male' control={<Radio />} label='Male' />
              <FormControlLabel
                value='other'
                control={<Radio />}
                label='Other'
              />
            </RadioGroup>
          </FormControl>

          <TextField
            onChange={handleChange}
            margin='dense'
            value={option}
            select
            label='active'
            id=''
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

export default NewUser;
