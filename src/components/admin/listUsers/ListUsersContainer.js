import ListUsers from './ListUsers';
import {connect} from 'react-redux';
import {deleteUserActionCreator} from '../../../redux/redusers/admin-page-reduser';

let mapStateToProps = (state) => {
    return {
        thdata: state.adminPage.tableUsers.thUsesrData,
        trdata: state.adminPage.tableUsers.trUsers,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: id => dispatch(deleteUserActionCreator(id)),
}
};

const ListUsersContainer = connect(mapStateToProps, mapDispatchToProps)(ListUsers);

export default ListUsersContainer;

