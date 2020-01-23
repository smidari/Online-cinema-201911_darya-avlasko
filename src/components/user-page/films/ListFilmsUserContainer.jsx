import { connect } from 'react-redux';
import ListFilmsUser from "./ListFilmsUser";
import {reserveFilmActionCreator} from "../../../redux/action-creators/action-creator-user-page";

const mapStateToProps = state => ({
    thdata: state.userPage.tableFilmsForUsers.thFilmsDataForUser,
    trdata: state.userPage.tableFilmsForUsers.trFilmsForUser,
});

const mapDispatchToProps = dispatch => ({
    reserveFilm: id => dispatch(reserveFilmActionCreator(id)),

});

const ListFilmsUserContainer = connect(mapStateToProps, mapDispatchToProps)(ListFilmsUser);

export default ListFilmsUserContainer;
