import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './Faq.css';

const Faq = () => {
    return (
        <div style={{ marginTop: '40px', marginBottom: '40px' }}>
            <h2 >FAQ's</h2>

            <Container style={{ textAlign: 'left', }}>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Do you help to make a tour plan?</Accordion.Header>
                        <Accordion.Body>
                            Yes, we provide support to make a tour plan from the start to end.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Do you arrange transport and guide?</Accordion.Header>
                        <Accordion.Body>
                            Yes, we have professional guides who are very professional. We also have a service to provide transport as per your requirments.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Do I have to pay other than package?</Accordion.Header>
                        <Accordion.Body>
                            No, our packages include the transports. But you need to pay the guide for his service.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>


        </div>
    );
};

export default Faq;