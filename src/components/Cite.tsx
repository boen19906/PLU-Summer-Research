import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Cite() {
    return (
        <Box sx = {{my: 2}}>
            <Typography variant='h5'>Citation</Typography>
            <Divider/>
            <Typography>Dr. Cao Renzhi</Typography>
        </Box>
        

    );
}