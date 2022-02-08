import { Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import login from '../../../images/login.png';

const Login = () => {

    const handleLoginSubmit=(e)=>{

        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:3}} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                        Login
                </Typography>
                <form onSubmit={handleLoginSubmit}>
                     <TextField
                     sx={{width:'75%',m:1}}
                      id="standard-basic" 
                      label="Your Email" 
                      variant="standard"
                       />
                     <TextField
                    sx={{width:'75%',m:1}}
                      id="standard-basic" 
                      label="Your Password" 
                      type='password'
                      variant="standard"
                       />
                </form>
                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={login} alt="" />
                </Grid>
             
            </Grid>
        </Container>
    );
};

export default Login;