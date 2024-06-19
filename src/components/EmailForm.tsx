import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function EmailForm() {
    return (
        <Box
    
      component="form"
      sx={{
        my:2,
        '& > :not(style)': { m: 0, width: '25ch' },
      }}
     
      noValidate
      autoComplete="off"
    >


    <TextField id="Email" label="Your Email Address" variant="outlined" placeholder={"resutls sent here"}/>
    </Box>
    );
    
}