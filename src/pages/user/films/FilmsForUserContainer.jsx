import { connect } from "react-redux";
import { getFilms, reserveFilm } from "../../../redux/actions/films";
import FilmsForUser from "./FilmsForUser";

const mapStateToProps = state => ({
  isFetching: state.films.isFetching,
  films: state.films.films
});

const FilmsForUserContainer = connect(mapStateToProps, {
  reserveFilm,
  getFilms
})(FilmsForUser);

export default FilmsForUserContainer;
