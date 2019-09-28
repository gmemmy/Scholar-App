import React, { Component, Fragment } from 'react';
import Authentication from '../components/authentication/login';


class Login extends Component {
  render() {
    return (
      <Fragment>
        <Authentication />
      </Fragment>
    );
  }
}

export default Login;