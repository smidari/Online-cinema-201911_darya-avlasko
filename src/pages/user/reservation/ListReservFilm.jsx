import React from 'react';
import PropTypes from 'prop-types';
import TableReservFilm from './table/TableReservFilm';


class ListReservFilm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
          <div><TableReservFilm
            thdata={this.props.thdata}
            trdata={this.props.trdata}
            removeReserveFilm={this.props.removeReserveFilm}
          />
          </div>
    );
  }
}

ListReservFilm.propTypes = {
  removeReserveFilm: PropTypes.func,
  trdata: PropTypes.array,
  thdata: PropTypes.array,
};

export default ListReservFilm;
