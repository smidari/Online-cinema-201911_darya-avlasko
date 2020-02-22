// eslint-disable-next-line no-unused-vars
import React from "react";
import "./hedar.css";
import { connect } from "react-redux";
import { getUsers, logout, verificationUser } from "../../redux/actions/users";
import Header from "./Header";

// const HeaderContainer = ({ admin, user, logout, verificationUser, stateModal }) => (
//
// );
const mapStateToProps = state => ({
  stateModal: state.users.modalSignIn.stateModal,
  admin: state.users.admin,
  user: state.users.user
});
const HeaderContainer = connect(mapStateToProps, {
  getUsers,
  verificationUser,
  logout
})(Header);
export default HeaderContainer;
