import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'


function Navy() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">teykout</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/vendor">For Vendors</Nav.Link>
                    <Nav.Link href="/userregister">Register</Nav.Link>
                    <Nav.Link href="/userlogin">Login</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default Navy;