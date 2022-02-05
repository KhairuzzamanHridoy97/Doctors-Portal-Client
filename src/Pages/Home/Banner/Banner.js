import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const bannerBg={
    background:`url(${bg})`,
}

const verticalCenter={
    display:'flex',
    height:400,
    alignItems:'center',
} 

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid  item style={{textAlign:'left', ...verticalCenter}} xs={12} md={5}>
            <Box>
            <Typography  variant='h3'>
                Your New Smile <br /> Start's Here
          </Typography>
          <Typography variant='h6' sx={{fontSize:14,color:'gray',fontWeight:300}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet magnam repudiandae voluptate rerum delectus? Ea laborum fugiat nesciunt expedita laboriosam.
          </Typography>
          <Button variant='contained'>
              Get Appoinment
          </Button>
            </Box>
        </Grid>
        <Grid item  xs={12} md={7} style={verticalCenter}>
            <img style={{width:'350px'}} src={chair} alt="" />
        </Grid>
       
      </Grid>
    </Container>
    );
};

export default Banner;