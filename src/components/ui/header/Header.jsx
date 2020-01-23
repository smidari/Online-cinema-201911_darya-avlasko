import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';
import BtnSigmIn from "../../home/Modal/BtnSignIn";
import BtnSigmUp from "../../home/Modal/BtnSignUp";
import BtnSignUpContainer from "../../home/Modal/BtnSignUpContainer";


const Header = props => {
  return (
    <Navbar className="top-menu" bg="dark" variant="dark">
      <Navbar.Brand>Online cinema</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="menu-main">
          {props.dataNav.map(item => (
            <Link className="menu-main-item" key={item.name.toString()} to={item.href}>
              {item.name}
            </Link>
))}
        </Nav>
          
        <Form className="btn-header">
          <BtnSigmIn />
          <BtnSignUpContainer />
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
