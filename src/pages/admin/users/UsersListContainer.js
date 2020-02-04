import React from "react";
import { connect } from 'react-redux';
import { deleteUser, getUsers } from "../../../redux/redusers/users-list-reduser";
import UsersList from "./UsersList";

class  UsersListContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return <UsersList
        thdata={this.props.thdata}
        users={this.props.users}
        deleteUser={this.props.deleteUser}
    />
  }
}

const mapStateToProps = state => ({
  thdata: state.adminUsersPage.thUsesrData,
  users: state.adminUsersPage.users,
});

export default connect(mapStateToProps,
    {deleteUser, getUsers}
    )(UsersListContainer);

