import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { packageId } = useParams();
    const [singlePackage, setSinglePackage] = useState({});

    useEffect(() => {
        fetch(`https://gory-hollow-85352.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setSinglePackage(data));
    }, [])

    return (
        <div>
            <h2>Details of: {singlePackage.name}</h2>
            <h2>This is booking: {packageId}</h2>
        </div>
    );
};

export default Booking;