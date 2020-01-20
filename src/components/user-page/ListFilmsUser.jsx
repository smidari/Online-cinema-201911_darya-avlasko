import React from 'react';
import PropTypes from 'prop-types';
import TableFilmsUser from "./table/TableFilmsUser";

class ListFilmsAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <div><TableFilmsUser thdata={this.props.thdata} trdata={this.props.trdata} />
          </div>
        );
    }
}

ListFilmsAdmin.propTypes = {
    trdata: PropTypes.array,
    thdata: PropTypes.array,
};

export default ListFilmsAdmin;

