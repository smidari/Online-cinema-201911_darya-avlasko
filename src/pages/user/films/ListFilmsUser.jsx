import React from 'react';
import PropTypes from 'prop-types';
import TableFilmsUser from "./table/TableFilmsUser";

class ListFilmsUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <div>
            <TableFilmsUser
              thdata={this.props.thdata}
              trdata={this.props.trdata}
              reserveFilm={this.props.reserveFilm}
            />
          </div>
        );
    }
}

ListFilmsUser.propTypes = {
    reserveFilm: PropTypes.func,
    trdata: PropTypes.array,
    thdata: PropTypes.array,
};

export default ListFilmsUser;

