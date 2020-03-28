import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'


function Navy() {
    let styles = {

        fontFamily: 'Titan One',

    };

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/" style={styles}>shopchat</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/userlogin">Login</Nav.Link>
                    <Nav.Link href="/userregister">Register</Nav.Link>
                    <Nav.Link href="/vendor">For Vendors</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>

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