import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';

import MyModal from "../modal/MyModal";
import FormForModalSignIn from "../forms/forms-modal-body/FormForModalSignIn";


const Header = props => {
    return (
      <Navbar className='top-menu' bg='dark' variant='dark'>
        <Navbar.Brand>Online cinema</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        
        <Navbar.Collapse id='basic-navbar-nav'>
          {JSON.parse(localStorage.getItem('authToken')) === 'admin' ? (
            <Nav className='menu-main'>
              <Link className='menu-main-item' to='/admin/films'>Films</Link>
              <Link className='menu-main-item' to='/admin/users'>Users</Link>
              <Link className='menu-main-item' to='/admin/deleteuser'>Delete Users</Link>
            </Nav>
        ) : <Nav className='menu-main' />}

          <Form className='header-btn'>
            { JSON.parse(localStorage.getItem('authToken')) === 'admin' ?  <Button variant='outline-info'>Log out</Button>  :

                (
                  <MyModal
                    nameBtnOpenModal='Sign in'
                    modaltitle='Sign in'
                    nameBtnConfirmation='Sign in'
                    confirmationFunc={props.verificationUser}
                    bodyModal={FormForModalSignIn}
                    stateModal={props.stateModal}
                  />
            )}

          </Form>

        </Navbar.Collapse>
      </Navbar>
    );
};

Header.propTypes = {
    stateModal: PropTypes.object,
    isAuth: PropTypes.bool,
    verificationUser: PropTypes.func,
};

export default Header;
