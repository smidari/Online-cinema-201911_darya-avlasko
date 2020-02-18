import React from 'react';
import Preloader from '../../../components/preloader/Preolader';
import MyTable from "../../../components/mytable/MyTable";

const columns = ['#', 'First name', 'Last name', 'Email'];

class UsersList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : (
            <MyTable columns={columns} rows={this.props.users} />
        )}
      </>
    );
  }
}

export default UsersList;
