import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function PilotOp() {
    return(
        <div className="pilotop">
            <Link to="/PilotRequestPermission">
                <Button variant="outline-dark">Request Permission</Button>
            </Link>
            <br />
            <br />
            <Link to="/PilotRequestInformation">
                <Button variant="outline-dark">Get Drone Information</Button>
            </Link>
            
        </div>
    )
}
export default PilotOp