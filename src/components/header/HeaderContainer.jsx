import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getUsers, logout, verificationUser } from '../../redux/actions/users';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  stateModal: state.users.modalSignIn.stateModal,
  admin: state.users.admin,
  user: state.users.user,
});

export default connect(mapStateToProps, { verificationUser, getUsers, logout })(HeaderContainer);
