import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'

const App = props => {

  // useEffect(() => {
  //   console.log('hello')
  //   console.log(navigator)
  //   console.log(navigator.geolocation)
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position)=> {
  //       console.log(position)
  //     }, (error) => {
  //       console.log(error)
  //     })
  //   } else {
  //     console.log('error')
  //   }
  // }, [])


  const handleSaveLocationClick = () => {
    props.onLocationFetched()
  }
  if(props.isAuth){
    return (
      <div>
        <h4>Save location:</h4>
        <button onClick={handleSaveLocationClick}>Save</button>
        <p>latitude: {props.location.lat} </p>
        <p>longitude: {props.location.long} </p>
      </div>
    )
  } else {
    props.history.push('/login')
    return (
      <div>
        <h3>Please Login.</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    isAuth: state.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLocationFetched: () => dispatch(actionCreators.locationFetched())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
