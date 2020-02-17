import React from "react";
import PropTypes from "prop-types";
import Preloader from "../../../components/preloader/Preolader";
import TableFilmsUser from "./table/TableFilmsUser";
import MyTable from "../../../components/mytable/MyTable";

class FilmsListUser extends React.Component {
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

FilmsListUser.propTypes = {
  getFilms: PropTypes.func,
  isFetching: PropTypes.bool,
  thdata: PropTypes.arrayOf,
  films: PropTypes.arrayOf,
  reserveFilm: PropTypes.func,
};
FilmsListUser.defaultProps = {
  getFilms: () => {},
  isFetching: false,
  thdata: [],
  films: [],
  reserveFilm: () => {},
};

export default FilmsListUser;