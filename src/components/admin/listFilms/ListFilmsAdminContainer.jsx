import { connect } from 'react-redux';
import ListFilmsAdmin from './ListFilmsAdmin';
import { addFilmActionCreator,  deleteFilmActionCreator } from '../../../redux/redusers/admin-page-reduser';


const mapStateToProps = state => ({
    thdata: state.adminPage.tableFilms.thFilmsData,
    trdata: state.adminPage.tableFilms.trFilms,
});

const mapDispatchToProps = dispatch => ({
    addFilm: newFilm => dispatch(addFilmActionCreator(newFilm)),
    deleteFilm: id => dispatch(deleteFilmActionCreator(id)),
});

const ListFilmsAdminContainer = connect(mapStateToProps, mapDispatchToProps)(ListFilmsAdmin);

export default ListFilmsAdminContainer;
