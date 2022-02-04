import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';



const Treatment = () => {
    return (
        <div>
               <Box sx={{ flexGrow: 1 }}>
                 <Grid container spacing={2} columns={16}>
                     <Grid item xs={8}>
                    
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