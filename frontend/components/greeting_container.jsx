import {connect} from 'react-redux';
import Greeting from './greeting';
import {logout} from '../actions/session_actions';

const mapStateToProps = state => {
  if (state.session.id) {
    return {currentUser: state.entities.users[state.session.id]};
  } else {
    return {};
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);