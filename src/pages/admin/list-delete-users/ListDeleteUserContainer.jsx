import { connect } from "react-redux";
import { removeReserveFilm } from "../../../redux/actions/films";
import ListDeleteUsers from "./ListDeleteUsers";

const mapStateToProps = state => ({
  trdata: state.users.removalRequestsFromUsers,
  usersForDelete: state.users.usersForDelete
});

const ListDeleteUsersContainer = connect(mapStateToProps, {
  removeReserveFilm
})(ListDeleteUsers);

export default ListDeleteUsersContainer;
