import { Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking'
import Typography from '@mui/material/Typography';

const bookings =[
    {
        id:1,
        name:"Teeth Orthdonics",
        time:'09.00 AM - 10.00 AM',
        space:10
    },
    {
        id:2,
        name:"Cosmetic Dentistry",
        time:'10.00 AM - 11.00 AM',
        space:8
    },
    {
        id:3,
        name:"Teeth Cleaning",
        time:'11.00 AM - 12.00 PM',
        space:3
    },
    {
        id:4,
        name:"Cavity Protection",
        time:'12.00 AM - 01.00 PM',
        space:4
    },
    {
        id:5,
        name:"Cavity Protection",
        time:'02.00 PM - 03.00 PM',
        space:6
    },
    {
        id:6,
        name:"Oral Sergery",
        time:'03.00 AM - 04.00 PM',
        space:7
    },
]


const AvailableAppoinments = ({date}) => {
    return (        
            <Container>
                <Typography variant='h4' sx={{color:'info.main',py:5}}>Available Appoinments {date.toDateString()}</Typography>
                <Grid container spacing={2}>
                   {
                       bookings.map(booking=>
                            <Booking
                            key={booking.id}
                            booking={booking}
                            date={date}
                            ></Booking>
                        )
                   }
                </Grid>
            </Container>
    );
};

export default AvailableAppoinments;