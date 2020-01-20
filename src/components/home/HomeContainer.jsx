import { connect } from 'react-redux';
import Home from './Home';


const mapStateToProps = state => ({
  dataNav: state.home.dataNav,
});


const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;
