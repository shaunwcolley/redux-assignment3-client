import React, { Component } from 'react';
import { connect } from 'react-redux'

class ViewLocations extends Component {
  constructor(){
    super()

    this.state = {
      locations: [],
      locationItems: [],
      message: ''
    }
  }
  componentDidMount() {
    this.locationFetch()
  }

  locationFetch = () => {
    let url = "http://localhost:8080" + this.props.match.url
    fetch(url)
    .then(response => response.json())
    .then(json => {
      this.setState({
        locations: json.locations
      })
      console.log(this.state.locations)
      let locations = this.state.locations
      let locationItems = locations.map((location) => {
        return <li key={location.id}>
        <p>Date: {location.createdAt}</p>
        <p>Latitude: {location.lat}</p>
        <p>Longitude: {location.long}</p>
        <a href={`https://www.latlong.net/c/?lat=${location.lat}&long=${location.long}`}>View</a>
        </li>
      })
      this.setState({
        locationItems: locationItems
      })
    })
  }

  render() {
    return(
      <div>
        Locations
        <ul>{this.state.locationItems}</ul>
        {this.state.message}
      </div>
    )
  }
}

export default connect()(ViewLocations)
