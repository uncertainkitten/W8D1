import React from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.State);
    this.props.processForm(user).then(this.ownProps.history.push('/'));
  }

  render () {
    if (this.props.loggedIn) {
      <Redirect to="/" />
    }

    const form = this.props.formType;
    const errors = this.props.errors.map(error => <li>{error}</li> );
    let link;
    let linkText;

    if (form === 'Login!') {
      link = '/signup';
      linkText = 'Sign Up!';
    } else {
      link = '/login';
      linkText = 'Login!';
    }

    return (
     <div>
        <h3>{this.props.formType}</h3>
        <Link to={link}>{linkText}</Link>
        <ul>{errors}</ul>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}/>
          </label>

          <label>Username:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')} />
          </label>

          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);