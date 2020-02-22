import { connect } from "react-redux";
import ListReservFilm from "./ListReservFilm";
import { removeReserveFilm } from "../../../redux/actions/films";

const mapStateToProps = state => ({
  reservationFilms: state.films.reservationFilms
});

const ListResrvFilmContainer = connect(mapStateToProps, { removeReserveFilm })(
  ListReservFilm
);

export default ListResrvFilmContainer;
