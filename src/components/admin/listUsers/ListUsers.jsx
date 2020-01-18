import React from 'react';
import TableUsers from '../../ui/forms/table/TableUsers';


class ListUsers extends React.Component {
    render() {
        return (
          <div>
           <TableUsers thdata={this.props.thdata} trdata={this.props.trdata} deleteUser={this.props.deleteUser} />
          </div>
        );
    }
}

export default ListUsers;
