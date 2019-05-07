import {FETCH_USER_ERROR} from '../action/constant'

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_USER_ERROR:
      return action.error
    default:
      return state
  }
}

export default errorReducer