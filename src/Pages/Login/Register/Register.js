import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const[loginData,setLoginData]=useState({});

    const {user,registerUser,isLoading,authError} = useAuth();


    const handleOnChange=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData= {...loginData};
        newLoginData[field]=value
        setLoginData(newLoginData)
        // console.log(field,value,newLoginData)
    }

    const handleLoginSubmit =e =>{
        if(loginData.password!== loginData.password2){
            alert('Password Not Matched');
            return
        }
        registerUser(loginData.email,loginData.password);
        e.preventDefault();
    }
    return (
        <Container>

        <Grid container spacing={2}>

            <Grid item xs={12} md={6} >
            <Typography variant="body2" gutterBottom>
                    Register </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField
                    sx={{width:"75%",m:1}}
                     id="standard-basic" 
                     label="Your Email"
                     type='email'
                     name='email'
                     onChange={handleOnChange} 
                     variant="standard" 
                     />
                    <TextField
                    sx={{width:"75%",m:1}}
                     id="standard-basic" 
                     label="Your Name"
                     type='name'
                     name='text'
                     onChange={handleOnChange} 
                     variant="standard" 
                     />
                    <TextField
                        sx={{width:"75%",m:1}}
                     id="standard-basic" 
                     label="Your Password" 
                     name='password'
                     onChange={handleOnChange}
                     type='password'
                     variant="standard" 
                     />
                    <TextField
                        sx={{width:"75%",m:1}}
                     id="standard-basic" 
                     label=" ReType Your Password" 
                     name='password2'
                     onChange={handleOnChange}
                     type='password'
                     variant="standard" 
                     />
                   
                    <Button  type='submit' sx={{width:"75%",m:1}} variant='contained'> 
                        Register
                    </Button>
                    <NavLink style={{textDecoration:'none'}} to='/login'>
                        <Button variant='text'> Alredy Registered? Please Login </Button>
                    </NavLink>
                    </form>}
                    {isLoading && <CircularProgress/>}
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
            
            </Grid>
            <Grid item xs={12} md={6} >
                <img style={{width:'100%'}} src={login} alt="" />
            </Grid>
        
      </Grid>
        </Container>
    );
};

export default Register;