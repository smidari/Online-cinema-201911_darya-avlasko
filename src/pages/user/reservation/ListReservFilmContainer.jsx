import { connect } from 'react-redux';
import ListReservFilm from './ListReservFilm';
import {removeReserveFilm} from "../../../redux/actions/user-page";


const mapStateToProps = state => ({
    thdata: state.userPage.tableFilmsForUsers.thFilmsDataForUser,
    trdata: state.userPage.reservationFilms,
});


const ListResrvFilmContainer = connect(mapStateToProps, {removeReserveFilm})(ListReservFilm);

export default ListResrvFilmContainer;
