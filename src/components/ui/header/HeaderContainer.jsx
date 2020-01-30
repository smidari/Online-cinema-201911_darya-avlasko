import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserData, verificationUser} from  '../../../redux/action-creators/action-creator-auth';

class HeaderContainer extends React.Component {

   render() {
      return <Header {...this.props} />
   }
}

const mapStateToProps = state => ({
   isAuth: state.auth.isAuth,
   stateModal: state.auth.modalSignIn.stateModal,

});

const mapDispatchToProps = dispatch => ({
   verificationUser:  user => dispatch(verificationUser(user)),
});

export default connect(mapStateToProps,mapDispatchToProps )(HeaderContainer) ;

//{setAuthUserData, verificationUser}