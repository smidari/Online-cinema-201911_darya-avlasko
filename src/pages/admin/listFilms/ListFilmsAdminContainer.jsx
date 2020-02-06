import { connect } from 'react-redux';
import ListFilmsAdmin from './ListFilmsAdmin';
import { addFilm,  deleteFilm } from '../../../redux/actions/admin-page';


const mapStateToProps = state => ({
    thdata: state.adminPage.tableFilms.thFilmsData,
    trdata: state.adminPage.tableFilms.trFilms,
    stateModal: state.adminPage.modalAddFilm.stateModal,
});



const ListFilmsAdminContainer = connect(mapStateToProps, {deleteFilm, addFilm})(ListFilmsAdmin);

export default ListFilmsAdminContainer;
