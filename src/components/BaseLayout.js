import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  andleSignOutClick = () => {
    this.props.history.push('/login')

  }
  render() {
    return(
      <div className="header">
        <div><NavLink to="/" className="navlink">Hïkely</NavLink></div>
        <div className="aboutLink"><NavLink to="/about" className="navlink">About</NavLink></div>
        {this.props.isAuthenticated ? <div><NavLink to="/" className="navlink"></NavLink></div> : null }
        {!this.props.isAuthenticated ? <div><NavLink to="/register" className="navlink">Register</NavLink></div> : null}
        {!this.props.isAuthenticated ? <div><NavLink to="/login" className="navlink">Login</NavLink></div> : null}
        {this.props.isAuthenticated ? <div className="navlink">  </div> : null }
        {this.props.isAuthenticated ? <button className="navlink" onClick={() => this.handleSignOutClick()}>Sign Out </button> : null }
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        Copyright 2019
      </div>
    )
  }
}

class BaseLayout extends Component {
  render(){
    return(
      <div>
      <Header />
        {this.props.children}
      <Footer />
      </div>
    )
  }
}

export default withRouter(BaseLayout)
