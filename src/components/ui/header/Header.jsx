import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';
import { showModal } from 'react-redux-modal-provider';
import BtnSignIn from "../Modal/BtnSignIn";

const Header = props => {
    return (
      <Navbar className='top-menu' bg='dark' variant='dark'>
        <Navbar.Brand>Online cinema</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        
        <Navbar.Collapse id='basic-navbar-nav'>
          {props.isAuth ? (
            <Nav className='menu-main'>
              <Link className='menu-main-item' to='/admin/films'>Films</Link>
              <Link className='menu-main-item' to='/admin/users'>Users</Link>
              <Link className='menu-main-item' to='/admin/deleteuser'>Delete Users</Link>
            </Nav>
        ) : <Nav className='menu-main' />}

          <Form className='header-btn'>
            { props.isAuth ?  <Button variant='outline-info'>Log out</Button>  : (
              <Button
                variant='outline-info'
                onClick={() => showModal(BtnSignIn, {
                    verificationUser: props.verificationUser,
                })}
              >Sign in
              </Button>
            )}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
};

Header.propTypes = {
    isAuth: PropTypes.bool,
    verificationUser: PropTypes.func,
};

export default Header;
