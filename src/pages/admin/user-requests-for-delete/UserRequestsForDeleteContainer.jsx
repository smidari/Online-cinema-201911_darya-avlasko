import { connect } from "react-redux";
import { removeReserveFilm } from "../../../redux/actions/films";
import UserRequestsForDelete from "./UserRequestsForDelete";

const mapStateToProps = state => ({
  trdata: state.users.removalRequestsFromUsers,
  usersForDelete: state.users.usersForDelete
});

const UserRequestsForDeleteContainer = connect(mapStateToProps, {
  removeReserveFilm
})(UserRequestsForDelete);

export default UserRequestsForDeleteContainer;
