import { connect } from 'react-redux';
import ListFilms from './ListFilms';
import { addFilmActionCreator } from '../../../redux/redusers/admin-page-reduser';


const mapStateToProps = state => ({
    thdata: state.adminPage.tableFilms.thFilmsData,
    trdata: state.adminPage.tableFilms.trFilms,
});

const mapDispatchToProps = dispatch => ({
    addFilm: newFilm => dispatch(addFilmActionCreator(newFilm)),
});

const ListFilmsContainer = connect(mapStateToProps, mapDispatchToProps)(ListFilms);

export default ListFilmsContainer;
