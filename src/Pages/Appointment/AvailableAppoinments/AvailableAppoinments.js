import { Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking'

const bookings =[
    {
        id:1,
        name:"Teeth Orthdonics",
        time:'11.00 AM - 12.00 PM',
        space:10
    },
    {
        id:2,
        name:"Cosmetic Dentistry",
        time:'11.00 AM - 12.00 PM',
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
        time:'08.00 AM - 12.00 PM',
        space:4
    },
    {
        id:5,
        name:"Cavity Protection",
        time:'10.00 AM - 11.00 PM',
        space:6
    },
    {
        id:6,
        name:"Oral Sergery",
        time:'11.00 AM - 12.00 PM',
        space:7
    },
]


const AvailableAppoinments = ({date}) => {
    return (        
            <Container>
                <h2>Available Appoinments {date.toDateString()}</h2>
                <Grid container spacing={2}>
                   {
                       bookings.map(booking=>
                            <Booking
                            key={booking.id}
                            booking={booking}
                            ></Booking>
                        )
                   }
                </Grid>
            </Container>
    );
};

export default AvailableAppoinments;