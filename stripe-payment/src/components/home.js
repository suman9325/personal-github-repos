import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


class Home extends React.Component {
    constructor() {
        super();
    }



    render() {
        return (
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ margin: "0px 0 0 20" }}>
                    <Navbar.Brand href="#home">ShopWay</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">


                            <Nav.Link > <Link to="/">Home</Link></Nav.Link>
                            <Nav.Link >  <Link to="/about">About</Link></Nav.Link>
                            <Nav.Link >  <Link to="/contact">Contact</Link></Nav.Link>
                            <Nav.Link >  <Link to="/Taketest">Take Test</Link></Nav.Link>
                            <Nav.Link >  <Link to="/result">Result</Link></Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


            </React.Fragment>
        );

    }
}

export default Home; 