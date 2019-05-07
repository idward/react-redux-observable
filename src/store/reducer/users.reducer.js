import {FETCH_USER_FULFILLED} from '../action/constant'

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        [action.user.login]: action.user
      }
    default:
      return state
  }
}

export default usersReducer