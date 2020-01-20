import React from 'react';
import PropTypes from 'prop-types';
import TableUsers from './table/TableUsers';


class ListUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <div>
            <TableUsers
              thdata={this.props.thdata}
              trdata={this.props.trdata}
              deleteUser={this.props.deleteUser}
            />
          </div>
        );
    }
}

ListUsers.propTypes = {
    thdata: PropTypes.array,
    trdata: PropTypes.array,
    deleteUser: PropTypes.func,
};

export default ListUsers;
