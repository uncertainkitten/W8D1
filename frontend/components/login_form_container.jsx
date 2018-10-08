import {connect} from 'react-redux';
import SessionForm from 'session_form';

const mapStateToProps = (state, ownProps) => {
  let loggedIn;
  
  if (state.session.id) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }

  return ({
    loggedIn: loggedIn,
    errors: state.errors,
    formType: "Login!"
  });
};

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);