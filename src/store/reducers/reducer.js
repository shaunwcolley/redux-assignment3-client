const initialState = {
  location: {}
}

const reducer = ( state = initialState, action) => {
  switch(action.type) {
    case 'LOC_FETCHED' :
    return {
      ...state,
      location: action.location
    }
  }

  return state
}

export default reducer
