import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Heading() {
  return (
    <Box sx={{my: 4}}>
      <Typography variant="h3" gutterBottom>
        PLU Protien Research
      </Typography>
      <Divider/>
    </Box>
  );
}