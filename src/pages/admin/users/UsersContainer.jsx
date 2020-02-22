import { connect } from "react-redux";
import { deleteUser, getUsers } from "../../../redux/actions/users";
import Users from "./Users";

const mapStateToProps = state => ({
  users: state.users.users,
  isFetching: state.users.isFetching
});

const UserListContainer = connect(mapStateToProps, { deleteUser, getUsers })(
  Users
);

export default UserListContainer;
