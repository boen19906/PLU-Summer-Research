import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function ContactInfo() {
    return (
        <Box sx = {{my: 2}}>
            <Typography variant='h5'>Contact</Typography>
            <Divider/>

            <Typography>If you have any questions please contact</Typography>
            <Typography>Dr. Cao Renzhi</Typography>
            <Typography>Department of Computer Science</Typography>
            <Typography>Pacific Lutheran University</Typography>

        </Box>
    );
}