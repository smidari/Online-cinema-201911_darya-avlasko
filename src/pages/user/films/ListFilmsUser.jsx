import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Preloader from '../../../components/preloader/Preolader';
import {getFilms, reserveFilm} from "../../../redux/actions/films";
import TableFilmsUser from "./table/TableFilmsUser";

class ListFilmsUser extends React.Component {
  componentDidMount() {
    this.props.getFilms();
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : (
          <TableFilmsUser
            thdata={this.props.thdata}
            films={this.props.films}
            reserveFilm={this.props.reserveFilm}
          />
)}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  thdata: state.films.tableFilms.thFilmsData,
  films: state.films.films,
  isFetching: state.films.isFetching,
});

export default connect(mapStateToProps, { reserveFilm, getFilms })(ListFilmsUser);
ListFilmsUser.propTypes = {
  getFilms: PropTypes.func,
  isFetching: PropTypes.bool,
  thdata: PropTypes.arrayOf,
  films: PropTypes.arrayOf,
  reserveFilm: PropTypes.func,
};
ListFilmsUser.defaultProps = {
  getFilms: () => {},
  isFetching: false,
  thdata: [],
  films: [],
  reserveFilm: () => {},
};