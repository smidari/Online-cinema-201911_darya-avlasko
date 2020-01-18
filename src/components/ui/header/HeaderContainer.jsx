import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  dataNav: state.header.dataNavAdmin,
});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
