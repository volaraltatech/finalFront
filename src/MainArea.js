import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
function MainArea() {
    return(
        <Container>
            <Row>
                <Col>
                    <Button variant="outline-dark">Pilot</Button>
                </Col>
                <Col>
                    <Button variant="outline-dark">Government</Button>
                </Col>
                <Col>
                    <Button variant="outline-dark">Insurance</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    Some Pilot Text
                </Col>
                <Col>
                    Some Government Text
                </Col>
                <Col>
                    Some Insurance Text
                </Col>
            </Row>
            
        </Container>
    )
}
export default MainArea