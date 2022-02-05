import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments';

const Appointment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader></AppointmentHeader>
            <AvailableAppoinments></AvailableAppoinments>
        </div>
    );
};

export default Appointment;