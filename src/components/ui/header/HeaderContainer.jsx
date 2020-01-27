import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserData, verificationUser} from  '../../../redux/action-creators/action-creator-auth';
import {AUTH_DATA} from "../../../redux/store";

class HeaderContainer extends React.Component {
componentDidMount() {
   const authDataLocalStorage = JSON.parse(localStorage.getItem(AUTH_DATA));
   if(Object.keys(authDataLocalStorage).length !== 0){
      this.props.setAuthUserData(authDataLocalStorage)
   }
}

   render() {
      return <Header {...this.props} />
   }
}

const mapStateToProps = state => ({
   isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {setAuthUserData, verificationUser})(HeaderContainer) ;

