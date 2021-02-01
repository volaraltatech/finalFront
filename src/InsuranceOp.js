import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function InsuranceOp() {
    return(
        <div className="insuranceop">
            <Link to="/InsuranceRequestInformation">
                <Button variant="outline-dark">Get Drone Information</Button>
            </Link>
            
        </div>
    )
}
export default InsuranceOp