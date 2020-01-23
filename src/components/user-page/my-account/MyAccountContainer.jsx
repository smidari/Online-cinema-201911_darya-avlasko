import { connect } from 'react-redux';
import MyAccount from "./MyAccount";
import { deleteMyAccountActionCreator } from '../../../redux/action-creators/action-creator-user-page';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    deleteMyAccount: () => dispatch(deleteMyAccountActionCreator()),
});

const MyAccountContainer = connect(mapStateToProps, mapDispatchToProps)(MyAccount);

export default MyAccountContainer;
