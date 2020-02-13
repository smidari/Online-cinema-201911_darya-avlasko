import { connect } from 'react-redux';
import {removeReserveFilm} from "../../../redux/actions/films";
import ListDeleteUsers from "./ListDeleteUsers";


const mapStateToProps = (state) => ({
  thdata: state.users.tableUsers.thUsesrData,
  trdata: state.users.removalRequestsFromUsers,
});

const ListDeleteUsersContainer = connect(mapStateToProps, { removeReserveFilm })(ListDeleteUsers);

export default ListDeleteUsersContainer;
