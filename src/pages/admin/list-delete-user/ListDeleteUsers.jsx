import React from 'react';
import PropTypes from 'prop-types';
import TableDeleteUsers from './table/TableDeleteUsers';

class ListDeleteUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TableDeleteUsers
          thdata={this.props.thdata}
        />
      </div>
    );
  }
}
ListDeleteUsers.propTypes = {
  thdata: PropTypes.string,
};
ListDeleteUsers.defaultProps = {
  thdata: '',
};

export default ListDeleteUsers;
