import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  render () {
    if (this.props.currentUser) {
      return (
      <div>
        <h2>Welcome, {this.props.currentUser.username}</h2>
        <button onClick={this.props.logout}>Logout!</button>
      </div>
      );
    } else {
      return (
      <div>
        <Link to='/signup'>Sign Up</Link>
        <br />
        <Link to='/login'>Log In</Link>
      </div>
      );
    }
  }
}

export default Greeting;