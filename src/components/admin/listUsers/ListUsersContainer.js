import { connect } from 'react-redux';
import ListUsers from './ListUsers';
import { deleteUserActionCreator } from '../../../redux/redusers/admin-page-reduser';

const mapStateToProps = state => ({
  thdata: state.adminPage.tableUsers.thUsesrData,
  trdata: state.adminPage.tableUsers.trUsers,
});

const mapDispatchToProps = dispatch => ({
  deleteUser: id => dispatch(deleteUserActionCreator(id)),
});

const ListUsersContainer = connect(mapStateToProps, mapDispatchToProps)(ListUsers);

export default ListUsersContainer;
