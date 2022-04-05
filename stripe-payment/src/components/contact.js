import React from 'react';
import { Form, FormGroup, FormControl, Container, Button, FormLabel, FormText } from 'react-bootstrap';

class Contact extends React.Component {
    constructor() {
        super();
    }



    render() {
        return (
            <div>
                <div className="container" style={{ margin: "20px 0 0 0" }}>
                    <div className="col-sm-4">
                        <Form>
                            <FormGroup controlId="formBasicEmail">
                                <FormLabel>Email address</FormLabel>
                                <FormControl type="email" placeholder="Enter email" />
                                <FormText className="text-muted">
                                    We'll never share your email with anyone else.
                                </FormText>
                            </FormGroup>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </div>
                </div>
            </div>
        );

    }
}

export default Contact;