import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      pass: '',
      message: ''
    }
  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleRegisterClick = () => {
    let credentials = this.state
    fetch('http://localhost:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(response => response.json())
    .then(json => {
      if(json.success){
        this.props.history.push('/login')
      } else if (!json.success) {
        this.setState({
          ...this.state,
          message: json.message
        })
      }
    })
  }
  render() {
    return (
      <div>
      <div className="component">
        <h4>Register</h4>
        <input type='text' placeholder='First Name' onChange={this.handleTextBoxChange} name="firstName"/>
        <input type='text' placeholder='Last Name' onChange={this.handleTextBoxChange} name="lastName"/>
        <input type='text' placeholder='User Name' onChange={this.handleTextBoxChange} name="userName"/>
        <input type='password' placeholder='password' onChange={this.handleTextBoxChange} name="pass"/>
        <button onClick={this.handleRegisterClick}>Register</button>
      </div>
      {this.state.message}
      </div>
    )
  }
}

export default Register
