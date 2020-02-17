import { connect } from 'react-redux';
import ListFilmsAdmin from "./ListFilmsAdmin";
import {addFilm, deleteFilm, getFilms} from "../../../redux/actions/films";


const mapStateToProps = (state) => ({
  thdata: state.films.tableFilms.thFilmsData,
  films: state.films.films,
  stateModal: state.adminPage.modalAddFilm.stateModal,
  isFetching: state.films.isFetching,
});

const ListFilmsAdminContainer = connect(mapStateToProps, { deleteFilm, addFilm, getFilms })(ListFilmsAdmin);

export default ListFilmsAdminContainer;
