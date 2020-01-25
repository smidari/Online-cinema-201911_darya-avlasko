import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';
import { showModal } from 'react-redux-modal-provider';
import BtnSigmIn from "../../home/Modal/BtnSignIn";
import MyModal from "../MyModal";
import AddModal from "../../admin/listFilms/ModalUi";

const Header = props => {


    const customStyles = {
        content : {
            top                   : '0',
            left                  : '0',
            left                 : 'auto',
    },
    };




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
          <button
              type="button"
              onClick={() => showModal(MyModal)}>
              Present modal
          </button>

        <BtnSigmIn />


      </Navbar.Collapse>
    </Navbar>

  );

};

Header.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
    dataNav: PropTypes.array,
};



export default Header;
