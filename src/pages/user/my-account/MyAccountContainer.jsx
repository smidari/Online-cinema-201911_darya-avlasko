import { connect } from "react-redux";
import MyAccount from "./MyAccount";
import { changeDataUser, deleteAccount } from "../../../redux/actions/users";

const mapStateToProps = state => ({
  userVerified: state.users.userVerified
});

const MyAccountContainer = connect(mapStateToProps, {
  changeDataUser,
  deleteAccount
})(MyAccount);

export default MyAccountContainer;
