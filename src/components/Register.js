import React, { Component } from 'react';

class Register extends Component {
  handleTextBoxChange = (e) => {
    console.log(e.target.value)
  }

  handleRegisterClick = () => {
    console.log('click')
  }
  render() {
    return (
      <div>
      <div className="component">
        <h4>Register</h4>
        <input type='text' placeholder='User Name' onChange={this.handleTextBoxChange} name="userName"/>
        <input type='password' placeholder='password' onChange={this.handleTextBoxChange} name="pass"/>
        <button onClick={this.handleRegisterClick}>Register</button>
      </div>
      </div>
    )
  }
}

export default Register
