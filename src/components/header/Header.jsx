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
    const { stateModal, admin, user, userVerification } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    const logout = () => this.props.logout();
    return (
      <>
        <Navbar className="top-menu" bg="dark" variant="dark">
          <Navbar.Brand>Online cinema</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {admin && (
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
            {user && (
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
              {admin || user ? (
                <Button variant="outline-info" onClick={logout}>
                  Log out
                </Button>
              ) : (
                <MyModal
                  nameBtnOpenModal="Sign in"
                  modaltitle="Sign in"
                  nameBtnConfirmation="Sign in"
                  confirmationFunc={userVerification}
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
  userVerification: PropTypes.func.isRequired,
  logout: PropTypes.func
};
Header.defaultProps = {
  admin: false,
  user: false,
  logout: () => {},
  stateModal: {
    email: "",
    password: ""
  }
};

export default Header;
