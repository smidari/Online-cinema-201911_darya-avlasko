import { connect } from "react-redux";
import { deleteUser, getUsers } from "../../../redux/actions/users";
import UsersList from "./UsersList";

const mapStateToProps = ( state ) => ({
  thdata: state.users.tableUsers.thUsesrData,
  users: state.users.users,
  isFetching: state.users.isFetching,
});

const UserListContainer = connect(mapStateToProps, { deleteUser, getUsers })(UsersList);

export default UserListContainer;
