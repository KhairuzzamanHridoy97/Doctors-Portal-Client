import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Typography } from '@mui/material';

const appoinmentBg={
    background:`url(${bg})`
}

const AppoinmentBanner = () => {
    return (
        <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                <img style={{width:"400px"}}  src={doctor} alt="" />
                </Grid>
                <Grid item xs={6} md={4}>
                <Typography variant="h6">
                        Appoinment
                </Typography>
                </Grid>
                
            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;