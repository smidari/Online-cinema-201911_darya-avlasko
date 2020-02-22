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
  "Remove reserve film"
];

const ListReservFilm = ({
  isFetching,
  reservationFilms,
  removeReserveFilm
}) => {
  return (
    <>
      {isFetching ? (
        <Preloader />
      ) : (
        <MyTable
          columns={columns}
          rows={reservationFilms}
          func={removeReserveFilm}
        />
      )}
    </>
  );
};

ListReservFilm.propTypes = {
  isFetching: PropTypes.bool,
  removeReserveFilm: PropTypes.func,
  reservationFilms: PropTypes.arrayOf(
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
  )
};

ListReservFilm.defaultProps = {
  removeReserveFilm: () => {},
  reservationFilms: [],
  isFetching: false
};

export default ListReservFilm;
