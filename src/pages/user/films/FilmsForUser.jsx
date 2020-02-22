import React from "react";
import PropTypes from "prop-types";
import Preloader from "../../../components/preloader/Preolader";
import MyTable from "../../../components/mytable/MyTable";

const columns = [
  "#",
  "Title",
  "Picture",
  "Description",
  "Ticket price",
  "Start date",
  "End date",
  "Tags",
  "Reserve film"
];

class FilmsForUser extends React.Component {
  componentDidMount() {
    const { getFilms } = this.props;
    getFilms();
  }

  render() {
    const { isFetching, films, reserveFilm } = this.props;
    return (
      <>
        {isFetching ? (
          <Preloader />
        ) : (
          <MyTable columns={columns} rows={films} func={reserveFilm} />
        )}
      </>
    );
  }
}

FilmsForUser.propTypes = {
  getFilms: PropTypes.func,
  isFetching: PropTypes.bool,
  films: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.string,
      Title: PropTypes.string,
      Picture: PropTypes.string,
      Description: PropTypes.string,
      "Ticket price": PropTypes.node,
      "Start date": PropTypes.node,
      "End date": PropTypes.node,
      Tags: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  reserveFilm: PropTypes.func
};
FilmsForUser.defaultProps = {
  getFilms: () => {},
  isFetching: false,
  films: [],
  reserveFilm: () => {}
};

export default FilmsForUser;
