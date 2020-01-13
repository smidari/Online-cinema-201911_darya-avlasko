import React from "react";
import Home from "./Home";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dataNav: state.home.dataNav,
    }
};


const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;