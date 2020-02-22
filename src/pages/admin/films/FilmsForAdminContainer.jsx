import { connect } from "react-redux";
import FilmsForAdmin from "./FilmsForAdmin";
import { addFilm, deleteFilm, getFilms } from "../../../redux/actions/films";

const mapStateToProps = state => ({
  films: state.films.films,
  stateModal: state.films.stateModal,
  isFetching: state.films.isFetching
});

const FilmsForAdminContainer = connect(mapStateToProps, {
  addFilm,
  deleteFilm,
  getFilms
})(FilmsForAdmin);

export default FilmsForAdminContainer;
