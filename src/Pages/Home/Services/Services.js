import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import flouride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';

const services =[
    {
        name:"Flouride Treatment",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti sint ad, provident commodi facere est? Ad,  quia sunt explicabo quibusdam aspernatur, assumenda iste ab libero ut eligendi sint molestias!",
        img: flouride
    },
    {
        name:"Cavity Filling",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti sint ad, provident commodi facere est? Ad,  quia sunt explicabo quibusdam aspernatur, assumenda iste ab libero ut eligendi sint molestias!",
        img: cavity
    },
    {
        name:"Teeth Whitening",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti sint ad, provident commodi facere est? Ad,  quia sunt explicabo quibusdam aspernatur, assumenda iste ab libero ut eligendi sint molestias!",
        img: whitening
    },
];

const Services = () => {
    return (

             <Box sx={{ flexGrow: 1 }}>
                 <Container>
                 <Typography sx={{fontWeight:400 ,color:'success.main',m:2}}  variant="h4" component="div">
                     OUR Services
                </Typography>
                 <Typography sx={{fontWeight:600,m:2}}  variant="h4" component="div">
                      Services We Provide
                </Typography>
                 <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                       {
                           services.map(service=><Service
                           key={service.name}
                           service={service} 
                           ></Service>)
                       }
                        </Grid>
                 </Container>
            </Box>
    
    );
};

export default Services;