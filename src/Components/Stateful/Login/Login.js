import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return(
      <form action="">
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Password'/>
        <button>Submit</button>
      </form>
    );
  }
}

export default Login;