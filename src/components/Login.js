import React, { Component } from 'react';
import { connect } from 'react-redux'

class Login extends Component {
  constructor() {
    super()
    this.state = {
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

  handleLoginClick = () => {
    let credentials = this.state
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(response => response.json())
    .then(json => {
      if(json.success){
        this.props.onSignIn(json.userId)
        this.props.history.push('/save-location')
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
        <h4>Login</h4>
        <input type='text' placeholder='User Name' onChange={this.handleTextBoxChange} name="userName"/>
        <input type='password' placeholder='password' onChange={this.handleTextBoxChange} name="pass"/>
        <button onClick={this.handleLoginClick}>Login</button>
      </div>
      {this.state.message}
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    onSignIn: (userId) => dispatch({type: 'SIGN_IN', userId: userId})
  }
}

export default connect(null,mapDispatchToProps)(Login)
