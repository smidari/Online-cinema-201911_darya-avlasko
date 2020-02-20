import { connect } from 'react-redux';
import ListFilmsAdmin from "./ListFilmsAdmin";
import {addFilm, deleteFilm, getFilms } from "../../../redux/actions/films";

const mapStateToProps = (state) => ({
  films: state.films.films,
  stateModal: state.films.stateModal,
  isFetching: state.films.isFetching,
});

const ListFilmsAdminContainer = connect(mapStateToProps, { deleteFilm, addFilm, getFilms })(ListFilmsAdmin);

export default ListFilmsAdminContainer;
