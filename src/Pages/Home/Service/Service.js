import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const {name,description,img}=props.service;
    return (
        <Grid item xs={2} sm={4} md={4} >
                <Card sx={{ minWidth: 275,border:0 ,boxShadow:0}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    style={{width:'auto',margin:'0 auto',height:'80px'}}
                    image={img} 
                    />
      <CardContent>
        
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {/* Pronoun */}
        </Typography>
        <Typography variant="body2">
        {description}
          <br />
         
        </Typography>
      </CardContent>
     
    </Card>
        </Grid>   
    );
};

export default Service;