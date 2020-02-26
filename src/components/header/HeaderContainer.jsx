// eslint-disable-next-line no-unused-vars
import React from "react";
import "./hedar.css";
import { connect } from "react-redux";
import { getUsers, logout, userVerification } from "../../redux/actions/users";
import Header from "./Header";

const mapStateToProps = state => ({
  stateModal: state.users.modalSignIn.stateModal,
  admin: state.users.userVerified.isAdmin,
  user: state.users.userVerified.isUser
});
const HeaderContainer = connect(mapStateToProps, {
  getUsers,
  userVerification,
  logout
})(Header);
export default HeaderContainer;
