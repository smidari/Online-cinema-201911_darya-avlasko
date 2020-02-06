import { connect } from 'react-redux';
import MyAccount from "./MyAccount";
import { deleteMyAccount } from '../../../redux/actions/user-page';


const MyAccountContainer = connect({deleteMyAccount})(MyAccount);

export default MyAccountContainer;
