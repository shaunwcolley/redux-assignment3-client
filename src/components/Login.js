import React, { Component } from 'react';

class Login extends Component {
  handleTextBoxChange = (e) => {
    console.log(e.target.value)
  }

  handleLoginClick = () => {
    console.log('click')
  }
  render() {
    return (
      <div>
      <div className="component">
        <h4>Login</h4>
        <input type='text' placeholder='User Name' onChange={this.handleTextBoxChange} name="userName"/>
        <input type='password' placeholder='password' onChange={this.handleTextBoxChange} name="pass"/>
        <button onClick={this.handleLoginClick}>Login</button>
      </div>
      </div>
    )
  }
}

export default Login
