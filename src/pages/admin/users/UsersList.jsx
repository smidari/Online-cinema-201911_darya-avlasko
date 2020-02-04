import React from 'react';
import TableUsers from './table/TableUsers';

const  UsersList = props => (
      <>
        <TableUsers
          thdata={props.thdata}
          users={props.users}
          deleteUser={props.deleteUser}
        />
      </>
);

export default UsersList;
