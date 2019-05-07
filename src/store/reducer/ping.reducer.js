import {PING, PONG} from '../action/constant'

const initialState = {isPinging: false}

const pingReducer = (state = initialState, action) => {
  switch (action.type) {
    case PING:
      return {...state, isPinging: true}
    case PONG:
      return {...state, isPinging: false}
    default:
      return state
  }
}

export default pingReducer