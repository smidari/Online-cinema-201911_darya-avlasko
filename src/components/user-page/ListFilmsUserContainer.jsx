import { connect } from 'react-redux';
import ListFilmsAdmin from "./ListFilmsUser";

const mapStateToProps = state => ({
    thdata: state.adminPage.tableFilms.thFilmsData,
    trdata: state.adminPage.tableFilms.trFilms,
});

const mapDispatchToProps = dispatch => ({
    // reserveFilm: id => dispatch(reserveFilmActionCreator(id)),

});

const ListFilmsUserContainer = connect(mapStateToProps, mapDispatchToProps)(ListFilmsAdmin);

export default ListFilmsUserContainer;
