import React from 'react';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import {Route} from 'react-router-dom';
import {AuthRoute} from '../util/route_util.jsx';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB (do u even lift)</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path='/login' component={LoginFormContainer}/>
    <AuthRoute path='/signup' component={SignupFormContainer}/>
  </div>
);

export default App;