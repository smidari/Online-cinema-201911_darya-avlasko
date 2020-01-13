import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dataNav: state.header.dataNavAdmin,
    }
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
