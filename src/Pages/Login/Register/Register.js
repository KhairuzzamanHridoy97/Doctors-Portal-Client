import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData,setLoginData] =useState({});


    const handleOnChange=(e)=>{
        const field=e.target.name;
        const value= e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit=(e)=>{
        if(loginData.password!== loginData.password2){

            alert('Your Password did not match');
        }
        e.preventDefault();
    }

    return (
        <Container>
        <Grid container spacing={2}>
            <Grid item sx={{mt:3}} xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
                    Register Here
            </Typography>
            <form onSubmit={handleLoginSubmit}>
                 <TextField
                 sx={{width:'75%',m:1}}
                  id="standard-basic" 
                  label="Your Email" 
                  name="email"
                  onChange={handleOnChange}
                  variant="standard"
                   />
                 <TextField
                sx={{width:'75%',m:1}}
                  id="standard-basic" 
                  label="Your Password" 
                  type='password'
                  name='password'
                  variant="standard"
                  onChange={handleOnChange}
                   />
                 <TextField
                sx={{width:'75%',m:1}}
                  id="standard-basic" 
                  label="ReType Your Password" 
                  type='password'
                  name='password2'
                  variant="standard"
                  onChange={handleOnChange}
                   />
                   <Button sx={{width:'75%',m:1}}  type='submit' variant='contained'>Login</Button>
                   <NavLink style={{textDecoration:"none"}} to='/login'>
                       <Button  variant='text'> Already Registered? Please Login </Button>
                   </NavLink>
            </form>
            </Grid>

            <Grid item xs={12} md={6}>
                <img style={{width:'100%'}} src={login} alt="" />
            </Grid>
        </Grid>
    </Container>
    );
};

export default Register;