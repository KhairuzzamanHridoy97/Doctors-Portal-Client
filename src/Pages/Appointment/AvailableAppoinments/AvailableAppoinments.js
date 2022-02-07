import React from 'react';

const AvailableAppoinments = ({date}) => {
    return (
        <div>
            <h2>Available Appoinments {date.toDateString()}</h2>
        </div>
    );
};

export default AvailableAppoinments;