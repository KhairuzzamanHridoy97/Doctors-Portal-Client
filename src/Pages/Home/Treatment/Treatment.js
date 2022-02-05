import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png';
import { Button, Typography } from '@mui/material';



const Treatment = () => {
    return (
        <div>
               <Box sx={{ flexGrow: 1 }}>
                 <Grid container spacing={2} columns={16} sx={{my:2}}>
                     <Grid  sx={{
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    textAlign:'left'
            }}  item xs={8}>
                        <img style={{width:"400px"}} src={treatment} alt="" />
                     </Grid>
                    <Grid item xs={8}>
                    <Typography variant="h3" sx={{mb:5}} >
                        Exceptional Dental <br /> Care , On Your Terms
                    </Typography>
                    <Typography sx={{my:3}} variant="h6" style={{color:'gray',fontSize:14,fontWeight:400}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga fugit ipsam autem quisquam sunt magnam facere, esse cum, ducimus .  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga fugit ipsam autem quisquam sunt magnam facere, esse cum, ducimus.
                     </Typography>
                     <Button variant ='contained'>
                         LEARN MORE
                    </Button>
                    </Grid>
                  </Grid>
                </Box>
        </div>
    );
};

export default Treatment;