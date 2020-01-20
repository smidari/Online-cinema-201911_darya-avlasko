import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
    dataNav: state.header.dataNavUser,
});

const HeaderUserContainer = connect(mapStateToProps)(Header);

export default HeaderUserContainer;
