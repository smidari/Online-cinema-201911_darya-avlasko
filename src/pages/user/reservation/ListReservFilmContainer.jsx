import { connect } from 'react-redux';
import ListReservFilm from './ListReservFilm';
import { removeReserveFilmActionCreator } from '../../../redux/actions/action-creator-user-page';

const mapStateToProps = state => ({
    thdata: state.userPage.tableFilmsForUsers.thFilmsDataForUser,
    trdata: state.userPage.reservationFilms,
});

const mapDispatchToProps = dispatch => ({
    removeReserveFilm: id => dispatch(removeReserveFilmActionCreator(id)),
});

const ListResrvFilmContainer = connect(mapStateToProps, mapDispatchToProps)(ListReservFilm);

export default ListResrvFilmContainer;
