import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  dataNav: state.header.dataNavAdmin,
});

const HeaderAdminContainer = connect(mapStateToProps)(Header);

export default HeaderAdminContainer;
