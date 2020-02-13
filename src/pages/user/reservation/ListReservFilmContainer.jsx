import { connect } from 'react-redux';
import ListReservFilm from './ListReservFilm';
import {removeReserveFilm} from "../../../redux/actions/films";

const mapStateToProps = (state) => ({
  thdata: state.films.tableFilms.thFilmsData,
  trdata: state.films.reservationFilms,
});

const ListResrvFilmContainer = connect(mapStateToProps, { removeReserveFilm })(ListReservFilm);

export default ListResrvFilmContainer;
