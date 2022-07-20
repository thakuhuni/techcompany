import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth(class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

   async login() {
    await this.props.oktaAuth.signInWithRedirect();
  }

  async logout() {
    await this.props.oktaAuth.signOut();
  }

  render() {
    let body = null;
    if (this.props.authState?.isAuthenticated) {
      body = (
        <div className="Buttons">
          <button onClick={this.logout}>Logout</button>
          {}
        </div>
      );
    } else {
      body = (
        <div className="Buttons">
          {this.login}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
       
         {this.login()}
        </header>
      </div>
    );
  }
});