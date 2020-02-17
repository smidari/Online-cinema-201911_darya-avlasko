import { connect } from "react-redux";
import { getFilms, reserveFilm } from "../../../redux/actions/films";
import FilmsListUser from "./FilmsListUser";

const mapStateToProps = ( state ) => ({
  thdata: state.films.tableFilms.thFilmsData,
  films: state.films.films,
  isFetching: state.films.isFetching,
});

const FilmsListUserContainer = connect(mapStateToProps, { reserveFilm, getFilms })(FilmsListUser);

export default FilmsListUserContainer;
