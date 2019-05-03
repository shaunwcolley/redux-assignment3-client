const initialState = {
  location: {},
  isAuth: false,
  userId: null
}

const reducer = ( state = initialState, action) => {
  switch(action.type) {
    case 'LOC_FETCHED':
    return {
      ...state,
      location: action.location
    }
    case 'SIGN_IN':
    return {
      ...state,
      isAuth: true,
      userId: action.userId
    }
    case 'SIGN_OUT':
    return {
      ...state,
      isAuth: false,
      userId: null
    }
  }

  return state
}

export default reducer
