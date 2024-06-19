import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function ProtienForm() {
  return (
    <Box
      component="form"
      sx={{
        my:2,
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { m: 0, width: '100ch' },
      }}
      noValidate
      autoComplete="off"

    >
        <TextField
          id="protien-form"
          label="Paste amino acid sequence here"
          multiline
          rows={8}
          placeholder=">Protien2 
          SATVSEINDTSVDJJHJKSHD"
        />

        
    </Box>



  );
};