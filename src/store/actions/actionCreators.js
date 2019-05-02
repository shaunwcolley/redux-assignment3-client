export const locationFetched = () => {

  return dispatch => {
    fetch('http://ip-api.com/json/')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      let location = {lat: json.lat, long: json.lon}
      console.log(location)
      alert(`Location: ${location.lat}, ${location.long} Recorded!`)
      dispatch({type: 'LOC_FETCHED', location: location })
    })
  }
}
