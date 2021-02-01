import React from "react";
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
            <div className="home">
            <Link to="/Pilot">
                <Button variant="outline-dark">Pilot</Button>
            </Link>
            <br />
            <br />
            <Link to="/Government">
                <Button variant="outline-dark">Government</Button>

            </Link>
            <br />
            <br />
            <Link to="/Insurance">
                <Button variant="outline-dark">Insurance</Button>
            </Link>
            
        </div>
        </div>
    )
}
export default Home