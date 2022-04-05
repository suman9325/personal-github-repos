import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class About extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Hello, world!</h1><p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p><Button variant="outline-primary"> <Link to="/about/details">Details</Link></Button></p>
                    <Button variant="outline-primary"> <Link to="/" >Go back home</Link></Button>

                </Container>
            </div>
        );
    }
}

export default About;