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
      if(json.length === undefined) {
        this.setState({
          message: json.message
        })
      } else {
        this.setState({
          locations: [{lat:json.lat,long:json.long}]
        })
        let locations = this.state.locations
        let locationItems = locations.map((location) => {
          return <li key={location.id}>{location.lat}, {location.long}</li>
        })
        this.setState({
          locationItems: locationItems
        })
      }
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
