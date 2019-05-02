import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'

const App = props => {

  const handleSaveLocationClick = () => {
    props.onLocationFetched()
  }
  return (
    <div>
      <h4>Save location:</h4>
      <button onClick={handleSaveLocationClick}>Save</button>
      <p>latitude: {props.location.lat} </p>
      <p>longitude: {props.location.long} </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    location: state.location
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLocationFetched: () => dispatch(actionCreators.locationFetched())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
