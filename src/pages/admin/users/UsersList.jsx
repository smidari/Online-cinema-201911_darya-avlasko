import React from 'react';
import Preloader from '../../../components/preloader/Preolader';
import TableUsers from './table/TableUsers';
import MyTable from "../../../components/mytable/MyTable";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <>
        <MyTable tbody={this.props.users}/>

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



export default UsersList;
