import React from "react";
import PropTypes from "prop-types";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyModal from "../modal/MyModal";
import FormForModalSignIn from "../forms/FormForModalSignIn";

class Header extends React.Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { admin, user, logout, verificationUser, stateModal } = this.props;
    return (
      <>
        <Navbar className="top-menu" bg="dark" variant="dark">
          <Navbar.Brand>Online cinema</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {admin === true && (
              <Nav className="menu-main">
                <Link className="menu-main-item" to="/admin/films">
                  Films
                </Link>
                <Link className="menu-main-item" to="/admin/users">
                  Users
                </Link>
                <Link className="menu-main-item" to="/admin/deleteuser">
                  Delete Users
                </Link>
              </Nav>
            )}
            {user === true && (
              <Nav className="menu-main">
                <Link className="menu-main-item" to="/user/myaccount">
                  My Account
                </Link>
                <Link className="menu-main-item" to="/user/films">
                  Films
                </Link>
                <Link className="menu-main-item" to="/user/reservation">
                  Reserve films
                </Link>
              </Nav>
            )}
            <Form className="header-btn">
              {admin || user === true ? (
                <Button variant="outline-info" onClick={() => logout()}>
                  Log out
                </Button>
              ) : (
                <MyModal
                  nameBtnOpenModal="Sign in"
                  modaltitle="Sign in"
                  nameBtnConfirmation="Sign in"
                  confirmationFunc={verificationUser}
                  bodyModal={FormForModalSignIn}
                  stateModal={stateModal}
                />
              )}
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

Header.propTypes = {
  getUsers: PropTypes.func.isRequired,
  stateModal: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.node
  }),
  admin: PropTypes.bool,
  user: PropTypes.bool,
  verificationUser: PropTypes.func,
  logout: PropTypes.func
};
Header.defaultProps = {
  admin: false,
  user: false,
  verificationUser: () => {},
  logout: () => {},
  stateModal: {
    email: "",
    password: ""
  }
};

export default Header;
