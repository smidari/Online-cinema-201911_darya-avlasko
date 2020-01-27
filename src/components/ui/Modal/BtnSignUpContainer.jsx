import { connect } from 'react-redux';
import BtnSignUp from "./BtnSignUp";


const mapStateToProps = state => ({
        formDataState: state.home.formData.signUp,
        formData: state.home.formData.data,
});

const mapDispatchToProps = dispatch => ({
    // addUSer: user => dispatch(addUserActionCreator(user)),
  });

const BtnSignUpContainer = connect(mapStateToProps, mapDispatchToProps)(BtnSignUp);

export default BtnSignUpContainer;
