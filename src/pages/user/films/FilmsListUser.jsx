import React from "react";
import PropTypes from "prop-types";
import Preloader from "../../../components/preloader/Preolader";
import MyTable from "../../../components/mytable/MyTable";

const columns = ['#', 'Title', 'Picture', 'Description', 'Ticket price', 'Start date', 'End date', 'Tags'];

class FilmsListUser extends React.Component {
  componentDidMount() {
    this.props.getFilms();
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : (
            <MyTable columns={columns} rows={this.props.films} />
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