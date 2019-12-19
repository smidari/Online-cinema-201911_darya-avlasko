import React from "react";
import { Navbar, Nav,NavDropdown, Button, FormControl, Form } from "react-bootstrap";


const Header = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Online cinema</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {props.dataNav.map(item => <Nav.Link href={item.href}>{item.name}</Nav.Link>)}

                </Nav>
                <Form inline>
                    <Button variant="outline-info" href="/sda" >Sign in</Button>
                    <Button variant="outline-info">Sign on</Button>

                </Form>
            </Navbar.Collapse>
        </Navbar>

    )
};

export default Header;