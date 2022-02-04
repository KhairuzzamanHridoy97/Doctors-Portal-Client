import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBg={
    background:`url(${bg})`,
    backgroundColor:'rgba(45,57,74,0.85)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop:175,
    
}

const AppoinmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                <img style={{width:"400px" , marginTop:'-120px'}}  src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    textAlign:'left'
            }}>
                    <Box>
                    <Typography variant="h6" sx={{mb:5}} style={{color:'aqua'}}>
                        Appoinment
                </Typography>
                <Typography variant="h4" sx={{my:3}} style={{color:'whitesmoke'}}>
                        Make An Appoinment Today
                </Typography>
                <Typography sx={{my:3}} variant="h6" style={{color:'white',fontSize:14,fontWeight:400}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga fugit ipsam autem quisquam sunt magnam facere, esse cum, ducimus  sunt magnam facere, esse cum, ducimus .  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga fugit ipsam autem quisquam sunt magnam facere.
                </Typography>
                <Button variant ='contained'>
                    Get Appoinment
                </Button>
                    </Box>
                </Grid>               
            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;