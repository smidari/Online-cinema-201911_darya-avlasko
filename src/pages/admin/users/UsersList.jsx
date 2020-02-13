import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, getUsers } from '../../../redux/actions/users';
import Preloader from '../../../components/preloader/Preolader';
import TableUsers from './table/TableUsers';

class UsersList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : (
          <TableUsers
            thdata={this.props.thdata}
            users={this.props.users}
            deleteUser={this.props.deleteUser}
            isFetching={this.props.isFetching}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  thdata: state.users.tableUsers.thUsesrData,
  users: state.users.users,
  isFetching: state.users.isFetching,
});

export default connect(mapStateToProps,
  { deleteUser, getUsers })(UsersList);
