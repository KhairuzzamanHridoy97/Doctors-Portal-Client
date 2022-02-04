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
        description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities",
        img: flouride
    },
    {
        name:"Cavity Filling",
        description: "While patients report slight discomfort during a filling, it is uncommon to experience severe, intolerable pain. As previously mentioned, this is a very common procedure for dentists to perform and modern dentistry has alleviated much of the pain once associated with getting a filling",
        img: cavity
    },
    {
        name:"Teeth Whitening",
        description: "Luckily, permanent, whiter teeth can be achieved by receiving porcelain veneers in Scotts Valley. Here is a look at the difference between these two popular cosmetic dental procedures. Porcelain veneers can be used to resolve a variety of appearance issues with teeth, including stains or discoloration.",
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