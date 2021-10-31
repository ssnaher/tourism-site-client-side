import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Footer.css';

const Footer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} sm={12}>
                        <p>&copy; Copyright 2021</p>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;