import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = (booking) => {
    const { name, img, price, description } = booking
    const { packageId } = useParams();
    const [singlePackage, setSinglePackage] = useState({});

    useEffect(() => {
        fetch(`https://gory-hollow-85352.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setSinglePackage(data));
    }, [])

    return (

        <Container>
            <Row>
                <Col sm={6} xs={12}>
                    {singlePackage.img}
                </Col>
                <Col sm={6} xs={12}>sm=4</Col>
            </Row>
            <h2>Details of: {name}</h2>
            <h2>Details of: {price}</h2>
            <h2>This is booking: {packageId}</h2>
        </Container>
    );
};

export default Booking;