import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Online cinema</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {props.dataNav.map(item => (
            <Nav.Link key={item.name.toString()} href={item.href}>
              {item.name}
            </Nav.Link>
))}
        </Nav>
        <Form inline>
          <Button variant="outline-info">Sign in</Button>
          <Button variant="outline-info">Sign on</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

  );

};

Header.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
    dataNav: PropTypes.array,
};



export default Header;
