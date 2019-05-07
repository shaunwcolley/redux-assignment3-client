import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export class Header extends Component {

  handleSignOutClick = () => {
    localStorage.removeItem('jsonwebtoken')
    this.props.onSignOut()
    this.props.history.push('/login')
  }

  render() {
    return(
      <div className="header">
        <div><NavLink to="/" className="navlink">Hïkely</NavLink></div>
        {!this.props.isAuthenticated ? <div className="aboutLink"><NavLink to="/about" className="navlink">About</NavLink></div> : null}
        {this.props.isAuthenticated ? <div className="aboutLink"><NavLink to="/save-location" className="navlink">Save Hike Location</NavLink></div> : null }
        {!this.props.isAuthenticated ? <div><NavLink to="/register" className="navlink">Register</NavLink></div> : null}
        {!this.props.isAuthenticated ? <div><NavLink to="/login" className="navlink">Login</NavLink></div> : null}
        {this.props.isAuthenticated ? <div> Profile </div> : null }
        {this.props.isAuthenticated ? <button className="navlink" onClick={() => this.handleSignOutClick()}>Sign Out</button> : null }
      </div>
    )
  }
}

export class Footer extends Component {
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
      <div className="body">
      <Header isAuthenticated={this.props.isAuth} onSignOut={() => this.props.onSignOut()} history={this.props.history}/>
        {this.props.children}
      <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
    userId: state.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignOut: () => dispatch({type: 'SIGN_OUT'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(BaseLayout))
