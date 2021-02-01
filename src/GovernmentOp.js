import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function GovernmentOp() {
    return(
        <div className="governmentop">
            <Link to="/">
                <Button variant="outline-dark">Update Permission</Button>
            </Link>
            <br />
            <br />
        </div>
    )
}
export default GovernmentOp