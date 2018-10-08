import { connect } from 'react-redux';
import SessionForm from './session_form';
import {signup} from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let loggedIn;

  if (state.session.id) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }

  return ({
    loggedIn: loggedIn,
    errors: state.errors.session,
    formType: "Sign Up!"
  });
};

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);