import { Button, Grid, Paper } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';

const Booking = ({booking}) => {
    const {name,time,space}= booking;
    return (       
            <Grid item xs={12} sm={6} md={4}>                    
                <Paper elevation={3} sx={{py:5}}>
                    <Typography sx={{color:'info.main' , fontWeight:600}} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button variant='contained'>
                        BOOK APPOINMENT
                    </Button>
                </Paper>
            </Grid>   
    );
};

export default Booking;