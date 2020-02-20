import React from 'react';
import Preloader from '../../../components/preloader/Preolader';
import MyTable from "../../../components/mytable/MyTable";
import {deleteUser} from "../../../redux/actions/users";

const columns = ['#', 'First name', 'Last name', 'Email', "Remove user"];

class UsersList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : (
            <MyTable columns={columns} rows={this.props.users} func={this.props.deleteUser} />
        )}
      </>
    );
  }
}

export default UsersList;
