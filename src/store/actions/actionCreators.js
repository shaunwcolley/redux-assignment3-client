import axios from 'axios'

let location = {}

export const locationFetched = (geoLocation,fetchLocation) => {

  if(geoLocation.lat === "" || geoLocation.long === "") {
    console.log('fetched location fired')
    location = fetchLocation
  } else {
    console.log('geolocation location fired')
    location = geoLocation
  }

  return dispatch => {
    axios.post('http://localhost:8080/location-save', {
      lat: location.lat,
      long: location.long
    }).then(response => {
      if(response.data.success){
        console.log(response.data.message)
      } else {
        console.log(response.data.message)
      }
    })
    alert(`Location: ${location.lat}, ${location.long} Recorded!`)
    dispatch({type: 'LOC_FETCHED', location: location })
  }
}
