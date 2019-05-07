import {combineReducers} from 'redux'
import usersReducer from './users.reducer'
import pingReducer from './ping.reducer'
import countReducer from './count.reducer'
import errorReducer from './error.reducer'

const rootReducer = combineReducers({
  users: usersReducer,
  ping: pingReducer,
  count: countReducer,
  error: errorReducer
})

export default rootReducer