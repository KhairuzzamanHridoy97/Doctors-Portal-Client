import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import login from '../../../images/login.png'
const Login = () => {

    const handleOnChange=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field,value)
    }

    const handleLoginSubmit =e =>{
        alert('Submitted');
        e.preventDefault();
    }
    return (
        <Container>

        <Grid container spacing={2}>

            <Grid item xs={12} md={6} >
            <Typography variant="body2" gutterBottom>
                    Login
                    <form onSubmit={handleLoginSubmit}>
                    <TextField
                    sx={{width:"75%",m:1}}
                     id="standard-basic" 
                     label="Your Email"
                     name='email'
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
                    {/* <TextField
                    sx={{width:"75%",m:1}}
                     id="standard-basic" 
                     label="Your Email" 
                     variant="standard" 
                     /> */}
                    <Button  type='submit' sx={{width:"75%",m:1}} variant='contained'> 
                        Login
                    </Button>
                    </form>
            </Typography>
            </Grid>
            <Grid item xs={12} md={6} >
                <img style={{width:'100%'}} src={login} alt="" />
            </Grid>
        
      </Grid>
        </Container>
    );
};

export default Login;