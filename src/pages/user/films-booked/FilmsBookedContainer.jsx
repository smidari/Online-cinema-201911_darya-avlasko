import { connect } from "react-redux";
import FilmsBooked from "./FilmsBooked";
import { removeReserveFilm } from "../../../redux/actions/films";

const mapStateToProps = state => ({
  reservationFilms: state.films.reservationFilms
});

const FilmsBookedContainer = connect(mapStateToProps, { removeReserveFilm })(
  FilmsBooked
);

export default FilmsBookedContainer;
