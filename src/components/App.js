import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'


class App extends Component {
  constructor(props) {
    super(props)
    this._isMounted = false
    this.state = {
      geoLocation: {
        lat: '',
        long: ''
      },
      fetchLocation: {
        lat: '',
        long: ''
      }
    }
  }

  componentDidMount() {
    this._isMounted = true
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position)=> {
        this.setState({
          geoLocation: {
            lat: position.coords.latitude,
            long: position.coords.longitude
          }})
      }, (error) => {
        console.log(error)
      })
    } else {
      console.log("geolocation not available")
    }
    fetch('http://ip-api.com/json/')
    .then(response => response.json())
    .then(json => {
      this.setState({
        fetchLocation: {
        lat: json.lat,
        long: json.lon
      }
    })
    })
  }

  handleSaveLocationClick = () => {
    this.props.onLocationFetched(this.state.geoLocation, this.state.fetchLocation)
  }
  render(){
    if(this.props.isAuth){
      return (
        <div>
          <h4>Save location:</h4>
          <button onClick={this.handleSaveLocationClick}>Save</button>
          <p>latitude: {this.props.location.lat} </p>
          <p>longitude: {this.props.location.long} </p>
          <p>Your url to view locations is: localhost:3000/view-locations/user-id/{this.props.userId}</p>
        </div>
      )
    } else {
      this.props.history.push('/login')
      return (
        <div>
          <h3>Please Login.</h3>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    isAuth: state.isAuth,
    userId: state.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLocationFetched: (geoLocation,fetchLocation) => dispatch(actionCreators.locationFetched(geoLocation,fetchLocation))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
